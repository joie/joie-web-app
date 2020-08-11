import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SessionsRoutingModule } from './sessions-routing.module';

import { SessionsDashboardComponent } from './containers/sessions-dashboard/sessions-dashboard.component';
import { SessionComponent } from './containers/session/session.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { SessionEnrollDialogComponent } from './components/session-enroll-dialog/session-enroll-dialog.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
import { SessionService } from './services/session.service';
import { SessionCardComponent } from './components/session-card/session-card.component';
import { KalturaPlayerModule } from '../kaltura-player/kaltura-player.module';

@NgModule({
  declarations: [
    SessionsDashboardComponent,
    SessionComponent,
    SessionListComponent,
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
  ],
  providers: [SessionService],
  exports: [SessionListComponent],
})
export class SessionsModule {}
