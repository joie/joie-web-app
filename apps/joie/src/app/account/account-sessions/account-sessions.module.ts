import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { AccountSessionsComponent } from './account-sessions.component';
import { SharedModule } from '../../shared/shared.module';
import { SessionFormModule } from '../../session-form/session-form.module';
import { SessionListModule } from '../../session-list/session-list.module';

@NgModule({
  declarations: [AccountSessionsComponent],
  imports: [SharedModule, SessionFormModule, SessionListModule, MatIconModule, SessionFormModule],
})
export class AccountSessionsModule {}
