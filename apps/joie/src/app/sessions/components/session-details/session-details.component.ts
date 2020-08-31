import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SessionDetails, SessionInfo } from '../../models';
import { SessionsFacade } from '../../../services/sessions.facade';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  courseId = '9ztuoR3KkHAHOdTT4hQZ';
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
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(untilDestroyed(this)).subscribe((params) => {
      // TODO - remove this after integrating with backend
      this.courseId = params.courseId || '9ztuoR3KkHAHOdTT4hQZ';
    });
    this.loadData();
  }

  loadData() {
    this.sessionsFacade
      .getSession(this.courseId)
      .subscribe((session) =>  this.session = session as SessionInfo);
  }
}
