import { config, https } from "firebase-functions";
import { KalturaClient } from "kaltura-typescript-client";
import { KalturaSessionType } from "kaltura-typescript-client/api/types/KalturaSessionType";
import { SessionStartAction } from "kaltura-typescript-client/api/types/SessionStartAction";
import { catchErrors, getUEmail } from "./helpers";

// Kaltura TypeScript library, it uses XMLHttpRequest to connect to Kaltura API
(global as any).XMLHttpRequest = require("xhr2");

const clientConfig = {
  clientTag: "sample-code",
  endpointUrl: "https://www.kaltura.com",
};
const kaltura_keys = config().kaltura as { partner_id: number; uiconf_id: number; client_secret: string };

const kalturaConfig = {
  partnerId: kaltura_keys.partner_id,
  uiconf_id: kaltura_keys.uiconf_id,
  secret: kaltura_keys.client_secret,
  type: KalturaSessionType.admin,
  eventTags: 'vcprovider:newrow',
  resourceTags: 'custom_rec_auto_start:1,custom_rs_show_participant:1',
  targetId: 'kalturaVodPlayer',
}

const client = new KalturaClient(clientConfig);

export const startKalturaSession = https.onCall(async (params, context) => {
  const email = getUEmail(context);

  if (!email) {
    throw new https.HttpsError('not-found', "couldn't find user in firestore");
  }

  const resp = await initKalturaSession(email, params);

  if (resp) {
    return catchErrors(Promise.resolve({
      data: {
        session: resp.session,
        kaltura_options: clientConfig
      },
      message: 'Kaltura Session succesfully created with SessionStartAction',
      type: 'success'
    }));
  }

  return catchErrors(Promise.resolve({
    message: 'failed to create session with the following error "SessionStartAction"',
    type: 'error'
  }));
});

const initKalturaSession = async (userEmail: string, params: any): Promise<any> => {
  try {
    const session = await client.request(
      new SessionStartAction({
        ...kalturaConfig,
        userId: userEmail,
        ...params
      })
    );

    if (!session) {
      console.log("Failed to start kaltura session");
      return undefined;
    }

    client.setDefaultRequestOptions({ ks: session });

    console.log(`Kaltura session:\n${session}`);

    return { session, client };
  } catch (error) {
    console.log(`Kaltura session error: \n ${error}`);
    return undefined;
  }
};