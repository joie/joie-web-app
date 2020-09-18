import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { KalturaEvent, Session } from '../../models';

import { SessionsFacade } from '../../../services/sessions.facade';

import { AngularFireAuth } from '@angular/fire/auth';
import { combineLatest, Observable } from 'rxjs';
import { Owner } from '../../../models';
import { map, pluck, switchMap, tap } from 'rxjs/operators';
import { SessionStartActionArgs } from 'kaltura-ngx-client';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent {
  #sessionId$: Observable<string> = this.activatedRoute.params.pipe(pluck('sessionId'));
  #displayName$: Observable<string> = this.afAuth.authState.pipe(pluck('displayName'));

  session$ = this.#sessionId$.pipe(
    switchMap((sessionId) => this.sessionsFacade.getSession(sessionId))
  );

  kalturaSessionDetails$: Pick<SessionStartActionArgs, 'userId'>;
  //   [sessionDetails]="sessionDetails"
  // [sessionType]="sessionType"
  // [role]="role"
  // [userContextualRole]="userContextualRole"
  // TODO - default assignment will be removed after integration

  isLiveSession = true; // if false vod player is visible

  // kalturaSessionDetails$: Pick<KalturaEvent, 'eventId'> & Pick<Owner, 'name'>;

  sessionType = 2;

  role = 'adminRole';

  userContextualRole = 0;

  entryId = '1_0v7lxhb8';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsFacade: SessionsFacade,
    private afAuth: AngularFireAuth
  ) {}

  // get kalturaSessionDetails$(): Observable<SessionStartActionArgs> {
  //   return this.session$.pipe(
  //     pluck('eventId', 'name'),
  //     map(({ name: userId, ...rest }) => ({ userId, ...rest }))
  //   );
  // }

  // loadData() {
  //   combineLatest([
  //     this.afAuth.authState.pipe(untilDestroyed(this)),
  //     this.sessionsFacade.getSession(this.sessionId),
  //   ])
  //     .pipe(untilDestroyed(this))
  //     .subscribe(([authResponse, {session}]) => {
  //       // this.sessionDetails = {
  //       //   eventId: session.eventId,
  //       //   uid: authResponse.displayName,
  //       // };

  //       this.session = session;
  //     });
  // }
}
