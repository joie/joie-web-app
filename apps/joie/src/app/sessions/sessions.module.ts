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
import { SessionFormModule } from '../session-form/session-form.module';

@NgModule({
  declarations: [
    SessionsDashboardComponent,
    SessionEnrollDialogComponent,
    SessionDetailsComponent,
    SessionCardComponent,
  ],
  imports: [
    SharedModule,
    SessionsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    KalturaPlayerModule,
    SessionListModule,
    SessionFormModule
  ],
  exports: [SessionEnrollDialogComponent],
})
export class SessionsModule {}
