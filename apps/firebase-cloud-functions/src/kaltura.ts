import { config, https } from 'firebase-functions';
import { getUID, isTeacher, getUDisplayName } from './helpers';
import { catchErrors } from './helpers';
import { KalturaClient } from 'kaltura-typescript-client';
import { KalturaSessionType } from 'kaltura-typescript-client/api/types/KalturaSessionType';
import { SessionStartAction, SessionStartActionArgs } from 'kaltura-typescript-client/api/types/SessionStartAction';
import { ScheduleResourceAddAction } from 'kaltura-typescript-client/api/types/ScheduleResourceAddAction';
import { KalturaLocationScheduleResource } from 'kaltura-typescript-client/api/types/KalturaLocationScheduleResource';
import { KalturaLiveStreamScheduleEvent } from 'kaltura-typescript-client/api/types/KalturaLiveStreamScheduleEvent';
import { ScheduleEventAddAction } from 'kaltura-typescript-client/api/types/ScheduleEventAddAction';
import { KalturaScheduleEventRecurrenceType } from 'kaltura-typescript-client/api/types/KalturaScheduleEventRecurrenceType';
import { KalturaScheduleEventResource } from 'kaltura-typescript-client/api/types/KalturaScheduleEventResource';
import { ScheduleEventResourceAddAction } from 'kaltura-typescript-client/api/types/ScheduleEventResourceAddAction';
// import { ScheduleResourceGetAction } from 'kaltura-typescript-client/api/types/ScheduleResourceGetAction';
import { ScheduleEventGetAction } from 'kaltura-typescript-client/api/types/ScheduleEventGetAction';
import { SessionEndAction } from 'kaltura-typescript-client/api/types/SessionEndAction';
import { UserContextualRoleType, RoleType, endpointUrl } from '@joie/schemes';

// Kaltura TypeScript library, it uses XMLHttpRequest to connect to Kaltura API
(global as any).XMLHttpRequest = require('xhr2');

const options = {
  clientTag: 'sample-code',
  endpointUrl,
};
const client = new KalturaClient(options);

const { admin_secret, partner_id } = config().kaltura;

// HTTPS CALLS
// export const getScheduleResourceList = https.onCall(async (_, context) => {
//   await startSessionAndUpdateClient();
//   return client.request(new ScheduleResourceListAction());
// });

// TODO change name
export const addLiveStream = https.onCall(async (_, context) => {
  if (!isTeacher(context)) {
    throw new https.HttpsError('permission-denied', 'must be a teacher');
  }

  const customSessionArgs = {
    userId: getUID(context), // optional, keeping here for logging requests
    type: KalturaSessionType.admin,
  };
  await startSessionAndUpdateClient(getSessionArgs(customSessionArgs));
  // Creating a Resource
  const resource = await createLocationScheduleResource();
  // Creating an Event
  const event = await createLiveStreamScheduleEvent(getUID(context));

  if (!resource || !event) {
    throw new https.HttpsError('internal', 'failed to create Kaltura resource or event');
  }

  // TODO end session?
  return catchErrors(associateEventWithResource(event.id, resource.id));
});

export const joinSession = https.onCall(async (_, context) => {
  const eventId = 7681893; // ! should be dynamically set in arguments
  // const resourceId = 1935943; // ! should be dynamically set in arguments
  const uid = getUID(context);
  if (!uid) {
    throw new https.HttpsError('permission-denied', 'must be a user');
  }

  const isOwner = await catchErrors(isScheduledEventOwner(eventId, uid));
  let privileges = `eventId:${eventId}`;
  privileges += `,role:${isOwner ? RoleType.admin : RoleType.viewer}`;
  privileges += `,userContextualRole:${isOwner ? UserContextualRoleType.instructor : UserContextualRoleType.guest}`;
  privileges += `,firstName:${getUDisplayName(context)}`;

  const customSessionArgs = {
    userId: getUID(context), // optional, keeping here for logging requests
    privileges,
    // expiry = 86400; // TODO get accurate duration according to session time
  };

  return await startSessionAndUpdateClient(getSessionArgs(customSessionArgs));

  // const customSessionArgs = {
  //   userId: getUID(context), // optional, keeping here for logging requests
  //   type: KalturaSessionType.admin,
  // };
  // await startSessionAndUpdateClient(getSessionArgs(customSessionArgs));

  // const customSessionArgs = {
  //   userId: getUID(context), // optional, keeping here for logging requests
  //   type: KalturaSessionType.admin,
  // };
  // getSessionArgs(customSessionArgs)
  // secret = "xxxxx"
  // userId = "max@organization.com";
  // type = KalturaSessionType::USER;
  // partnerId = 1234567;
  // expiry = 86400;
  // privileges = "eventId:3371011,role:viewerRole,userContextualRole:3,firstName:Max";
});

// METHODS
function getDefaultSessionArgs() {
  return {
    secret: admin_secret,
    partnerId: Number(partner_id),
    type: KalturaSessionType.user, // what will be the difference? priviliges?
    expiry: 86400, // TODO discuss preferred time
    // userId,
    // eventTags: 'vcprovider:newrow', // @ilirhushi clarify this
    // resourceTags: 'custom_rec_auto_start:1,custom_rs_show_participant:1', // @ilirhushi clarify this
    // targetId: 'kalturaVodPlayer', // @ilirhushi clarify this
  };
}

function getSessionArgs(customArgs: Partial<SessionStartActionArgs> = {}): SessionStartActionArgs {
  if (!admin_secret || !partner_id) {
    throw new https.HttpsError('internal', 'missing Kaltura env credentials');
  }

  return { ...getDefaultSessionArgs(), ...customArgs };
}

async function isScheduledEventOwner(scheduleEventId: number, uid: string) {
  await startSessionAndUpdateClient(getSessionArgs({ type: KalturaSessionType.admin }));

  // const resource = await client.request(new ScheduleResourceGetAction({ scheduleResourceId: resourceId }));
  const event = await client.request(new ScheduleEventGetAction({ scheduleEventId }));
  if (!event) {
    throw new https.HttpsError('not-found', 'event not found');
  }

  // end admin session and start relevant session with priviliges
  await endSession();

  return event.organizer === uid;
}

async function startSessionAndUpdateClient(args: SessionStartActionArgs): Promise<string | undefined> {
  try {
    const ks = await client.request(new SessionStartAction(args));
    if (!ks) {
      throw new https.HttpsError('failed-precondition', `kaltura client 'SessionStartAction' request failed`);
    }

    // !SIDE EFFECT! impure mutation of the global 'client'
    // it update client default request options upon kaltura session success
    client.setDefaultRequestOptions({ ks });

    return ks;
  } catch (error) {
    throw new https.HttpsError('internal', `error: ${error}`);
  }
}

async function endSession() {
  return await client.request(new SessionEndAction({}));
}

async function createLocationScheduleResource() {
  const args = {
    name: 'room name',
    tags: 'vcprovider:newrow,custom_company_logo:https://joie-app.web.app/assets/images/logo-joie.svg', // TODO make sure this works
    // systemName: 'system name optional', // optional // TODO what is this for? should be unique
    description: 'lorem ipsum', // optional
  };
  const scheduleResource = new KalturaLocationScheduleResource(args);

  return await client.request(new ScheduleResourceAddAction({ scheduleResource }));
}

// ! docs instruct using the 'KalturaRecordScheduleEvent' but at this point record isn't necessary
// is it possible to combine live stream event with location resource?
// https://github.com/kaltura-vpaas/virtual-meeting-rooms#creating-an-event
// ! important ! 'KalturaLiveStreamScheduleEvent' is described as a broadcasting event
// ! which probably means 1-to-many. we need a many-to-many or 1-to-many and many-to-1
async function createLiveStreamScheduleEvent(organizer: string | undefined) {
  if (!organizer) {
    throw new https.HttpsError('permission-denied', 'must be a user');
  }
  const args = {
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    recurrenceType: KalturaScheduleEventRecurrenceType.none,
    summary: 'event summary, say something',
    organizer, // optional
    // ! not relevant until decided to actually use 'KalturaRecordScheduleEvent'
    // templateEntryId: (string) the entry used for session recording
    // ! not relevant until decided to actually use 'KalturaRecordScheduleEvent'
    // ownerId: (int) in the case that templateEntryId is empty, this user will now own the recording
    // not sure what this next prop is
    // referenceId: (string) third party's corresponding event ID
    // location: (string) geographical location of the event
    // find tags docs @ https://github.com/kaltura-vpaas/virtual-meeting-rooms#tags--event-settings
    // tags: (string) see below
  };
  const scheduleEvent = new KalturaLiveStreamScheduleEvent(args);
  return await client.request(new ScheduleEventAddAction({ scheduleEvent }));
}

async function associateEventWithResource(eventId: number, resourceId: number) {
  const scheduleEventResource = new KalturaScheduleEventResource({ eventId, resourceId });
  return await client.request(new ScheduleEventResourceAddAction({ scheduleEventResource }));
}

// const createLiveStreamEntry = async () => {
//   const liveStreamEntry = new KalturaLiveStreamEntry();
//   liveStreamEntry.name = 'Test Live Entry With Cloud Transcoding';
//   liveStreamEntry.description = 'Just a test live stream entry';
//   liveStreamEntry.dvrStatus = KalturaDVRStatus.enabled;
//   liveStreamEntry.dvrWindow = 120;
//   liveStreamEntry.explicitLive = KalturaNullableBoolean.trueValue;
//   // LIVE_STREAM_FLASH designates a standard web live entry acquired via an RTMP or RTSP stream
//   liveStreamEntry.mediaType = KalturaMediaType.liveStreamFlash;
//   liveStreamEntry.recordStatus = KalturaRecordStatus.disabled;
//   return await client.request(new LiveStreamAddAction({ liveStreamEntry, sourceType: KalturaSourceType.liveStream }));
//   // TODO await endSessionAndUpdateClient()
// };

// const createLiveStreamScheduleEvent = async () => {
//   const data: KalturaLiveStreamScheduleEventArgs = {
//     projectedAudience: 5,
//     sourceEntryId: '',
//     preStartTime: 0,
//     postEndTime: 0,
//   };
//   const scheduleEvent = new KalturaLiveStreamScheduleEvent(data);
//   scheduleEvent.summary = 'say a few words'; // the description of the event
//   scheduleEvent.startDate = new Date(); // unix timestamp
//   scheduleEvent.endDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // unix timestamp
//   scheduleEvent.recurrenceType = KalturaScheduleEventRecurrenceType.none;
//   return scheduleEvent;
// };

// export const addLiveStream = https.onCall(async (_, context) => {
//   await startSessionAndUpdateClient();
//   // first create the Live Entry
//   const liveEntry = await createLiveStreamEntry();

//   // Create the Scheduled Event:
//   // KalturaRecordScheduleEvent for a recording scheduling
//   // KalturaLiveStreamScheduleEvent for a live broadcast scheduling
//   // KalturaBlackoutScheduleEvent for scheduling a blackout date
//   const scheduleEvent = await createLiveStreamScheduleEvent();

//   // throw if no failed to create
//   if (!scheduleEvent || !liveEntry) {
//     throw new https.HttpsError('internal', 'failed to create Kaltura entry or event');
//   }

//   // Define a Kaltura Entry as template entry for the event that includes the desired
//   // metadata for the recorded or live entry resulting from the scheduled event
//   // (including any information on how to publish the entry; co - editors, description / title, etc.).
//   // Note: if you're scheduling a Live Event, set the Live Stream Entry id as the template of this Scheudled Event
//   scheduleEvent.templateEntryId = liveEntry?.id;

//   // $client is the preinitilized KalturaClient instance
//   // const schedulePlugin = KalturaScheduleClientPlugin.get(client);
//   // scheduleEvent = schedulePlugin.scheduleEvent.add($scheduleEvent);
//   // const schedulePlugin = KalturaScheduleClientPlugin::get($client)
//   return createLiveStreamScheduleEvent();
// });

// // // Create a resource to use with this event:
// // // KalturaCameraScheduleResource for a camera resource in a recorded event
// // // KalturaLiveEntryScheduleResource for a Live Stream Entry in a live broadcast event
// // // KalturaLocationScheduleResource for designating a room
// // // multiple resources can be assigned to a single event (e.g. a room + camera + live entry)
// // $scheduleResource = new KalturaLiveEntryScheduleResource();
// // $scheduleResource->name = $resourceName; // a name to call your resource
// // $scheduleResource->systemName = $systemName; // a unique identified to identify your resource
// // if ($resourceType == 'KalturaLiveEntryScheduleResource') {
// //     $scheduleResource->entryId = $liveEntry->id;
// // }
// // $schedulePlugin = KalturaScheduleClientPlugin::get($client);
// // $scheduleResource = $schedulePlugin->scheduleResource->add($scheduleResource);

// // // Assign the resource to the Event.
// // // Kaltura will not error or alert if the resource is already been assigned to an event at the same time.
// // // To get the conflicting events call the scheduleEvent.getConflicts action.:
// // $scheduleEventResource = new KalturaScheduleEventResource();
// // $scheduleEventResource->eventId = $scheduleEvent->id;
// // $scheduleEventResource->resourceId = $scheduleResource->id;
// // $schedulePlugin = KalturaScheduleClientPlugin::get($client);
// // $scheduleEventResource = $schedulePlugin->scheduleEventResource->add($scheduleEventResource);

// // // To test for scheduling conflicts before assigning an existing resource to a new event,
// // $schedulePlugin = KalturaScheduleClientPlugin::get($client);
// // $filter->systemNameEqual = $yourResourceSystemName;
// // $scheduledResource = $schedulePlugin->scheduleResource->listAction($filter)->objects[0];
// // $resourceIds = $scheduledResource->id;
// // $scheduleEventConflictType = KalturaScheduleEventConflictType::BOTH;
// // $testForSchedulingConflicts = $schedulePlugin->scheduleEvent->getConflicts($resourceIds, $scheduledEvent, null, $scheduleEventConflictType);
// // if ($testForSchedulingConflicts->totalCount == 0) {
// // 	// It is safe to assign the resource to the event, no scheduling conflicts found.
// // } else {
// //     // Conflicts detected, this resource is already scheduled at this time.
// //     //Please resolve conflicts before assigning it to another event at the same time.
// // }
