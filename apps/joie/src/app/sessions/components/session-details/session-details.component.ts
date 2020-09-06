import { Component, OnInit, ErrorHandler } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { SessionDetails, SessionInfo } from '../../models';

import { SessionsFacade } from '../../../services/sessions.facade';

import { AngularFireAuth } from '@angular/fire/auth';
import { combineLatest } from 'rxjs';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',

  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  sessionId: string;

  session: SessionInfo;

  // TODO - default assignment will be removed after integration

  isLiveSession = true; // if false vod player is visible

  sessionDetails: SessionDetails = { eventId: 6507501, userId: 'test 123' };

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
        this.sessionDetails = {
          eventId: session.eventId,
          userId: authResponse.displayName,
        };

        this.session = session as SessionInfo;
      });
  }
}
