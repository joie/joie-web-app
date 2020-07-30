import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDashboardComponent } from './containers/account-dashboard/account-dashboard.component';

@NgModule({
  declarations: [AccountDashboardComponent],
  imports: [SharedModule, AccountRoutingModule],
})
export class AccountModule {}
