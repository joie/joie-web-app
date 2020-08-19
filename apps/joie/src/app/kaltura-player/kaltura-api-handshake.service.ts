import { Injectable } from '@angular/core';
import { throwError, Observable, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  KalturaClient, SessionStartAction, KalturaSessionType, KalturaMediaEntryFilter,
  KalturaFilterPager, MediaListAction, ScheduleResourceAddAction, KalturaScheduleResource,
  KalturaCameraScheduleResource, KalturaLiveEntryScheduleResource, KalturaLocationScheduleResource,
  KalturaScheduleResourceFilter, ScheduleResourceListAction, KalturaRecordScheduleEvent,
  KalturaLiveStreamScheduleEvent, KalturaBlackoutScheduleEvent, ScheduleEventAddAction,
  KalturaScheduleEventRecurrenceType, KalturaScheduleEventFilter, ScheduleEventListAction,
  ScheduleEventResourceAddAction, KalturaScheduleEventResource
} from 'kaltura-ngx-client';
import { environment } from '../../environments/environment';
import { Roles, UserContextualRole } from '../models';
@Injectable({ providedIn: 'root' })
export class KalturaApiHandShakeService {

  static readonly clientSecret = environment.kalturaConfig.clientSecret;
  static readonly partnerId = environment.kalturaConfig.partner_id;
  // expiry time of the session
  public expiry: 84000;

  constructor(private kaltura: KalturaClient) { }

  getKalturaSession() {
    this.kaltura
      .setOptions({
        clientTag: 'sample-code',
        endpointUrl: 'https://www.kaltura.com',
      });
    // create session for Kalutura handshake
    this.kaltura
      .request(new SessionStartAction({
        secret: KalturaApiHandShakeService.clientSecret,
        type: KalturaSessionType.admin,
        partnerId: KalturaApiHandShakeService.partnerId,
      }))
      .subscribe(ks => {
        this.kaltura.setDefaultRequestOptions({ ks });

        // to get all attachments
        // this.getAllMediaList();


        // to create a resource
        // this.createScheduleResource();


        // to get all created resources
        // this.getScheduleResourceList();


        // to schedule an event
        // this.createScheduleEvent();


        // to get all scheduled events
        // this.getScheduleEventList()


        // to combine event with a resource
        // this.createScheduleEventResource();

        // to join in a live stream session
        // const sessionCreationDetails = {
        //   eventId: 4553802,
        //   userId: 'Joie',
        // };

        // this.createSession(sessionCreationDetails, Roles.admin, KalturaSessionType.admin, UserContextualRole.instructor);
      },
        error => {
          console.error(`failed to create session with the following error 'SessionStartAction'`);
          throwError(error);
        });
  }

  /**
   * to create a live stream event session
   * @param eventCreationDetails session details to join in live meeting room
   */
  createLiveStreamEntry(eventCreationDetails) {
    return forkJoin([
      this.createScheduleResource(eventCreationDetails.resourceName),
      this.createScheduleEvent(eventCreationDetails),
    ])
      .pipe(
        switchMap(([resourceRes, eventRes]) => {
          return this.createScheduleEventResource(resourceRes.id, eventRes.id)
            .pipe(
              map(streamEntryRes => {
                return streamEntryRes;
              }),
              catchError(err => {
                return throwError(err);
              }),
            );
        }),
        catchError(err => {
          return throwError(err);
        }),
      );
  }

  /**
   * to get all attachments
   */
  getAllMediaList() {
    const filter = new KalturaMediaEntryFilter();
    const pager = new KalturaFilterPager();

    this.kaltura
      .request(new MediaListAction({ filter, pager }));
  }

  /**
   * to create a resource
   * @param resourceName of the resource
   * @param scheduleResourceType type of session
   */
  createScheduleResource(resourceName: string, scheduleResourceType: number = 3): Observable<any> {
    let scheduleResource;

    if (scheduleResourceType === 1) {
      scheduleResource = new KalturaCameraScheduleResource();
    } else if (scheduleResourceType === 2) {
      scheduleResource = new KalturaLiveEntryScheduleResource();
    } else {
      scheduleResource = new KalturaLocationScheduleResource();
    }

    scheduleResource.name = resourceName;
    scheduleResource.tags = environment.kalturaConfig.eventTags;

    return this.kaltura
      .request(new ScheduleResourceAddAction({ scheduleResource }));
  }

  /**
   * to get all created resources
   */
  getScheduleResourceList() {
    const filter = new KalturaScheduleResourceFilter();
    const pager = new KalturaFilterPager();

    this.kaltura
      .request(new ScheduleResourceListAction({ filter, pager }));
  }

  /**
   * to schedule an event
   * @param eventCreationDetails for event creation
   * @param scheduleResourceType type of session
   */
  createScheduleEvent(eventCreationDetails: any, scheduleResourceType: number = 3): Observable<any> {
    let scheduleEvent;

    if (scheduleResourceType === 1) {
      scheduleEvent = new KalturaBlackoutScheduleEvent();
    } else if (scheduleResourceType === 2) {
      scheduleEvent = new KalturaLiveStreamScheduleEvent();
    } else {
      scheduleEvent = new KalturaRecordScheduleEvent();
    }

    scheduleEvent.recurrenceType = KalturaScheduleEventRecurrenceType.none;
    scheduleEvent.summary = eventCreationDetails.summary;
    scheduleEvent.entryIds = eventCreationDetails.entryIds;
    scheduleEvent.templateEntryId = eventCreationDetails.templateEntryId;
    scheduleEvent.description = eventCreationDetails.description;
    scheduleEvent.startDate = eventCreationDetails.startDate;
    scheduleEvent.endDate = eventCreationDetails.endDate;
    scheduleEvent.tags = environment.kalturaConfig.resourceTags;

    return this.kaltura
      .request(new ScheduleEventAddAction({ scheduleEvent }));
  }

  /**
   * to get all scheduled events
   */
  getScheduleEventList() {
    const filter = new KalturaScheduleEventFilter();
    const pager = new KalturaFilterPager();

    this.kaltura
      .request(new ScheduleEventListAction({ filter, pager }));
  }

  /**
   * to schedule and event resource
   * @param resourceId of the session
   * @param eventId of the session
   */
  createScheduleEventResource(resourceId?, eventId?): Observable<any> {
    const scheduleEventResource = new KalturaScheduleEventResource();
    scheduleEventResource.eventId = eventId;
    scheduleEventResource.resourceId = resourceId;

    return this.kaltura
      .request(new ScheduleEventResourceAddAction({ scheduleEventResource }));
  }

  /**
   * to create a session
   * @param sessionCreationDetails for session information
   * @param role of the session
   * @param type of user
   * @param userCtxRole userContextualRole of the user
   */
  createSession(
    sessionCreationDetails: any, role: string = Roles.viewer, type: number = KalturaSessionType.user,
    userCtxRole: number = UserContextualRole.guest) {

    const { userId, eventId } = sessionCreationDetails;
    const privileges = `eventId:${eventId},role:${role},userContextualRole:${userCtxRole}`;

    this.kaltura
      .request(new SessionStartAction({
        secret: KalturaApiHandShakeService.clientSecret, type,
        partnerId: KalturaApiHandShakeService.partnerId, expiry: this.expiry, privileges, userId
      }))
      .subscribe(result => {
        console.log(result);
        const url = `https://${KalturaApiHandShakeService.partnerId}.kaf.kaltura.com/virtualEvent/launch?ks=${result}`;
        window.open(url, '_blank');
      },
        error => {
          throwError(error);
        });
  }

  // TODO to be removed after integrated with session component
  temporaryLivestreamPage() {
    // to create a live stream event session
    const eventCreationDetails = {
      resourceName: 'Live session',
      scheduleResourceType: 3,
      summary: 'Live session',
      entryIds: '1007',
      templateEntryId: '1007',
      description: 'Testing API',
      startDate: new Date(1597684800),
      endDate: new Date(1597771200),
      tags: 'custom_rec_auto_start:1,custom_rs_show_participant:1',
    };
    this.createLiveStreamEntry(eventCreationDetails)
      .subscribe(res => {
        this.createSession({
            eventId: res.eventId,
            userId: 'Joie APP',
          }, Roles.admin, KalturaSessionType.admin, UserContextualRole.instructor);
      },
        error => {
          throwError(error);
        });
  }
}
