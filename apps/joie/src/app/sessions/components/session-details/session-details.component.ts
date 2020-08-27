import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Session, SessionDetails } from '../../models';
import { SessionService } from '../../services/session.service';
import { KalturaApiHandShakeService } from '../../../kaltura-player/kaltura-api-handshake.service';

@UntilDestroy()
@Component({
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  courseId = 123;
  session: Session;
  // TODO - default assignment will be removed after integration
  isLiveSession = true; // if false vod player is visible
  sessionDetails: SessionDetails = { eventId: 6059661, userId: 'test' };
  sessionType = 2;
  role = 'adminRole';
  userContextualRole = 0;
  entryId = '1_0v7lxhb8';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private kalturaApiHandShakeService: KalturaApiHandShakeService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(untilDestroyed(this)).subscribe((params) => {
      // TODO - remove this 1234 after integrating with backend
      this.courseId = params.courseId || 1234;
    });
    this.loadData();
  }

  loadData() {
    this.sessionService
      .getSession(this.courseId)
      .subscribe((session) => (this.session = session as Session));
  }

  // TODO - to be removed after the integration
  liveSession() {
    this.kalturaApiHandShakeService.temporaryLivestreamPage();
  }
}
