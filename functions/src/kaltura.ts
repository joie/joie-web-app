import { KalturaClient } from "kaltura-typescript-client";
import { KalturaSessionType } from "kaltura-typescript-client/api/types/KalturaSessionType";
import { SessionStartAction } from "kaltura-typescript-client/api/types/SessionStartAction";

const clientConfig = {
  clientTag: "sample-code",
  endpointUrl: "https://www.kaltura.com",
};

const kalturaConfig = {
  partnerId: 2976751,
  uiconf_id: 46180971,
  secret: '',
  type: KalturaSessionType.admin,
  eventTags: 'vcprovider:newrow',
  resourceTags: 'custom_rec_auto_start:1,custom_rs_show_participant:1',
  targetId: 'kalturaVodPlayer',
}

const client = new KalturaClient(clientConfig);

export const startKalturaSession = async (userSecret: string): Promise<boolean> => {
  try {
    const session = await client.request(
      new SessionStartAction({
        ...kalturaConfig,
        userId: userSecret,
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
