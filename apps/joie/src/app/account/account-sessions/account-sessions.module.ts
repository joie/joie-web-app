import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { AccountSessionsComponent } from './account-sessions.component';
import { SharedModule } from '../../shared/shared.module';
import { SessionListModule } from '../../session-list/session-list.module';
import { AccountSessionsRoutingModule } from './account-sessions-routing.module';
import { SessionFormModule } from '../../session-form/session-form.module';

@NgModule({
  declarations: [AccountSessionsComponent],
  imports: [
    SharedModule,
    AccountSessionsRoutingModule,
    SessionFormModule,
    SessionListModule,
    MatIconModule,
  ],
})
export class AccountSessionsModule {}
