import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { KalturaEvent, Session } from '../../models';

import { SessionsFacade } from '../../../services/sessions.facade';

import { AngularFireAuth } from '@angular/fire/auth';
import { combineLatest, Observable } from 'rxjs';
import { Owner } from '../../../models';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  sessionId: string;

  session: Session;

  // TODO - default assignment will be removed after integration

  isLiveSession = true; // if false vod player is visible

  sessionDetails: Pick<KalturaEvent, 'eventId'> & Pick<Owner, 'uid'> = {
    eventId: 6507501,
    uid: 'test 123',
  }; // ! @pratheeshkumarrd please notice property change from 'userId to 'uid'

  sessionType = 2;

  role = 'adminRole';

  userContextualRole = 0;

  entryId = '1_0v7lxhb8';

  constructor(
    private activatedRoute: ActivatedRoute,

    private sessionsFacade: SessionsFacade,

    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(untilDestroyed(this)).subscribe((params) => {
      this.sessionId = params.sessionId;
    });

    this.loadData();
  }

  loadData() {
    combineLatest([
      this.afAuth.authState.pipe(untilDestroyed(this)),
      this.sessionsFacade.getSession(this.sessionId),
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([authResponse, session]) => {
        // this.sessionDetails = {
        //   eventId: session.eventId,
        //   uid: authResponse.displayName,
        // };

        this.session = session;
      });
  }
}
