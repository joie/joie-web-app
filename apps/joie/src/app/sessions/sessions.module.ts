import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SessionsRoutingModule } from './sessions-routing.module';

import { SessionsDashboardComponent } from './containers/sessions-dashboard/sessions-dashboard.component';
import { SessionEnrollDialogComponent } from './components/session-enroll-dialog/session-enroll-dialog.component';
import { SessionDetailsComponent } from './containers/session-details/session-details.component';
import { SessionCardComponent } from './components/session-card/session-card.component';
import { KalturaPlayerModule } from '../kaltura-player/kaltura-player.module';
import { SessionListModule } from '../session-list/session-list.module';
import { VideoIntroComponent } from './components/video-intro/video-intro.component';
import { WhatLearnComponent } from './components/what-learn/what-learn.component';
import { MeetTeacherComponent } from './components/meet-teacher/meet-teacher.component';
import { CommunitySayComponent } from './components/community-say/community-say.component';
import { SessionFormModule } from '../session-form/session-form.module';
import { SessionOwnerLinksComponent } from './components/session-owner-links/session-owner-links.component';

@NgModule({
  declarations: [
    SessionsDashboardComponent,
    SessionEnrollDialogComponent,
    SessionDetailsComponent,
    SessionCardComponent,
    VideoIntroComponent,
    WhatLearnComponent,
    MeetTeacherComponent,
    CommunitySayComponent,
    SessionOwnerLinksComponent,
  ],
  imports: [
    SharedModule,
    SessionsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    KalturaPlayerModule,
    SessionListModule,
    SessionFormModule,
  ],
  exports: [SessionEnrollDialogComponent],
})
export class SessionsModule {}
