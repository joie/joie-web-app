import { config, https } from 'firebase-functions';
import { KalturaClient } from 'kaltura-typescript-client';
import { KalturaSessionType } from 'kaltura-typescript-client/api/types/KalturaSessionType';
import { SessionStartAction } from 'kaltura-typescript-client/api/types/SessionStartAction';
import { catchErrors, getUID } from './helpers';

// Kaltura TypeScript library, it uses XMLHttpRequest to connect to Kaltura API
(global as any).XMLHttpRequest = require('xhr2');

// ENV Variables
export const { secret, partner_id: partnerId, uiconf_id } = config().kaltura;

const clientOptions = {
  clientTag: 'sample-code', // @ilirhushi clarify this
  endpointUrl: 'https://www.kaltura.com',
};
const client = new KalturaClient(clientOptions);

const startSessionAndUpdateClient = async (userId: string): Promise<string | undefined> => {
  try {
    const sessionStartActionArgs = {
      secret,
      partnerId,
      uiconf_id,
      userId,
      type: KalturaSessionType.admin,
      // eventTags: 'vcprovider:newrow', // @ilirhushi clarify this
      // resourceTags: 'custom_rec_auto_start:1,custom_rs_show_participant:1', // @ilirhushi clarify this
      // targetId: 'kalturaVodPlayer', // @ilirhushi clarify this
    };

    const ks = await client.request(new SessionStartAction(sessionStartActionArgs));
    if (!ks) {
      throw new https.HttpsError('failed-precondition', `kaltura client 'SessionStartAction' request failed`);
    }

    // !SIDE EFFECT! impure mutation of the global 'client' within this function
    // it update client default request options upon kaltura session success
    client.setDefaultRequestOptions({ ks });

    return ks;
  } catch (error) {
    throw new https.HttpsError('internal', `error: ${error}`);
  }
};

export const kalturaGetSession = https.onCall(async (_, context) => {
  const uid = getUID(context);

  if (!uid) {
    return null;
  }

  // @ilirhushi should this occur only once? once every function call?
  // will the session type change due to type of user?move to global config like stripe ?
  return catchErrors(startSessionAndUpdateClient(uid));
});
