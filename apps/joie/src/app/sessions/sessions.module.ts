import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SessionsRoutingModule } from './sessions-routing.module';

import { SessionsDashboardComponent } from './containers/sessions-dashboard/sessions-dashboard.component';
import { SessionComponent } from './containers/session/session.component';
import { SessionEnrollDialogComponent } from './components/session-enroll-dialog/session-enroll-dialog.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
import { SessionService } from './services/session.service';
import { SessionCardComponent } from './components/session-card/session-card.component';
import { KalturaPlayerModule } from '../kaltura-player/kaltura-player.module';
import { SessionListModule } from '../session-list/session-list.module';

@NgModule({
  declarations: [
    SessionsDashboardComponent,
    SessionComponent,
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
  ],
  providers: [SessionService],
  exports: [SessionEnrollDialogComponent],
})
export class SessionsModule {}
