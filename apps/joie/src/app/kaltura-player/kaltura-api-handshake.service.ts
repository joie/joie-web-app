import { Injectable } from '@angular/core';
import { throwError, Observable, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  KalturaClient,
  KalturaSessionType,
  KalturaMediaEntryFilter,
  KalturaFilterPager,
  MediaListAction,
  ScheduleResourceAddAction,
  KalturaCameraScheduleResource,
  KalturaLiveEntryScheduleResource,
  KalturaLocationScheduleResource,
  KalturaScheduleResourceFilter,
  ScheduleResourceListAction,
  KalturaRecordScheduleEvent,
  KalturaLiveStreamScheduleEvent,
  KalturaBlackoutScheduleEvent,
  ScheduleEventAddAction,
  KalturaScheduleEventRecurrenceType,
  KalturaScheduleEventFilter,
  ScheduleEventListAction,
  ScheduleEventResourceAddAction,
  KalturaScheduleEventResource,
  MediaAddAction,
  KalturaMediaEntry,
  KalturaMediaType,
  MediaAddContentAction,
  KalturaUploadedFileTokenResource,
} from 'kaltura-ngx-client';
import { environment } from '../../environments/environment';
import { Roles, UserContextualRole } from '../models';
import { AngularFireFunctions } from '@angular/fire/functions';

declare var kWidget;
declare var $: any;

interface IResponse {
  type: 'success' | 'error';
  data: any;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class KalturaApiHandShakeService {
  static readonly partnerId = environment.kalturaConfig.partner_id;
  static readonly uiconfId = environment.kalturaConfig.uiconf_id;
  // expiry time of the session
  public expiry: 84000;
  kWidget = kWidget;

  constructor(private kaltura: KalturaClient, private fns: AngularFireFunctions) {
    this.getKalturaSession();
  }

  getKalturaSession() {
    this.startSession().subscribe((resp: IResponse) => {
      if (resp.type === 'success') {
        this.kaltura.setOptions(resp.data.kaltura_options);
        this.kaltura.setDefaultRequestOptions({ ks: resp.data.session });
      } else {
        console.error(resp.message);
        throwError(resp.message);
      }
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
    ]).pipe(
      switchMap(([resourceRes, eventRes]) => {
        return this.createScheduleEventResource(resourceRes.id, eventRes.id).pipe(
          map((streamEntryRes) => {
            return streamEntryRes;
          }),
          catchError((err) => {
            return throwError(err);
          })
        );
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  /**
   * to get all attachments
   */
  getAllMediaList() {
    const filter = new KalturaMediaEntryFilter();
    const pager = new KalturaFilterPager();

    this.kaltura.request(new MediaListAction({ filter, pager }));
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

    return this.kaltura.request(new ScheduleResourceAddAction({ scheduleResource }));
  }

  /**
   * to get all created resources
   */
  getScheduleResourceList() {
    const filter = new KalturaScheduleResourceFilter();
    const pager = new KalturaFilterPager();

    this.kaltura.request(new ScheduleResourceListAction({ filter, pager }));
  }

  /**
   * to schedule an event
   * @param eventCreationDetails for event creation
   * @param scheduleResourceType type of session
   */
  createScheduleEvent(
    eventCreationDetails: any,
    scheduleResourceType: number = 3
  ): Observable<any> {
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

    return this.kaltura.request(new ScheduleEventAddAction({ scheduleEvent }));
  }

  /**
   * to get all scheduled events
   */
  getScheduleEventList() {
    const filter = new KalturaScheduleEventFilter();
    const pager = new KalturaFilterPager();

    this.kaltura.request(new ScheduleEventListAction({ filter, pager }));
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

    return this.kaltura.request(new ScheduleEventResourceAddAction({ scheduleEventResource }));
  }

  createMediaAddAction(data): Observable<any> {
    let entry = new KalturaMediaEntry();
    entry.mediaType = KalturaMediaType.video;
    entry = { ...entry, ...data};

    return this.kaltura.request(new MediaAddAction({ entry }));
  }

  createMediaAddContentAction(entryId, uploadTokenID): Observable<any> {
    const resource = new KalturaUploadedFileTokenResource();
    resource.token = uploadTokenID;

    return this.kaltura.request(new MediaAddContentAction({ entryId, resource }));
  }

  /**
   * to create a session
   * @param sessionCreationDetails for session information
   * @param role of the session
   * @param type of user
   * @param userCtxRole userContextualRole of the user
   *
   * @returns session token
   */
  createSession(
    userId,
    eventId,
    role: string = Roles.viewer,
    type: number = KalturaSessionType.user,
    userCtxRole: number = UserContextualRole.guest
  ): Observable<string> {
    const privileges = `eventId:${eventId},role:${role},userContextualRole:${userCtxRole}`;

    const { partnerId } = KalturaApiHandShakeService;

    return this.startSession({
      partnerId,
      type,
      expiry: this.expiry,
      privileges,
      userId,
    }).pipe(
      map((resp: IResponse) => {
        if (resp.type === 'success') {
          return resp.data.session as string;
        }
        return null;
      })
    );
  }

  startSession(params?: { partnerId: number; type: number; expiry: number; privileges: string; userId: string; }) {
    const callable = this.fns.httpsCallable('startKalturaSession');
    return callable(params);
  }

  boot(entryID: any) {
    const { uiconfId, partnerId } = KalturaApiHandShakeService;

    const kalturaConfiguration = {
      targetId: 'player',
      wid: partnerId,
      uiconf_id: uiconfId,
      flashvars: {},
      cache_st: 1602684332,
      entry_id: entryID,
    };
    this.kWidget.embed(kalturaConfiguration);
  }

  reboot(entryID: any) {
    console.log('updated video id-->', entryID);
    this.kWidget.addReadyCallback((playerId) => {
      // var kdp = document.getElementById('player');
      const kdp = $('#player').get(0);
      kdp.sendNotification('changeMedia', { entryId: $(this).attr('data-entryId') });
      kdp.kBind('changeMedia', (data) => {
        console.log('data?-------------->', data);
        kdp.evaluate();
      });
    });
  }
}
