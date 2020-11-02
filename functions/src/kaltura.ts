import { config } from "firebase-functions";
import { KalturaClient } from "kaltura-typescript-client";
import { KalturaSessionType } from "kaltura-typescript-client/api/types/KalturaSessionType";
import { SessionStartAction } from "kaltura-typescript-client/api/types/SessionStartAction";

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

export const startKalturaSession = async (userEmail: string): Promise<boolean> => {
  try {
    const session = await client.request(
      new SessionStartAction({
        ...kalturaConfig,
        userId: userEmail,
      })
    );

    if (!session) {
      console.log("Failed to start kaltura session");

      return false;
    }

    client.setDefaultRequestOptions({ ks: session });

    console.log(`Kaltura session:\n${session}`);

    return true;
  } catch (error) {
    console.log(`Kaltura session error: \n ${error}`);
    return false;
  }
};
