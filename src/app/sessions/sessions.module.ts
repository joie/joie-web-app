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

@NgModule({
  declarations: [
    SessionsDashboardComponent,
    SessionComponent,
    SessionListComponent,
    SessionEnrollDialogComponent,
  ],
  imports: [
    SharedModule,
    SessionsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [SessionListComponent],
})
export class SessionsModule {}
