import { AccountNotificationSetingsComponent } from './account-notification-setings/account-notification-setings.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountSidenavComponent } from './components/account-sidenav/account-sidenav.component';
import { MainLayoutComponent } from './../common/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDashboardComponent } from './containers/account-dashboard/account-dashboard.component';

const routes: Routes = [
  // { path: '', component: AccountDashboardComponent }
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      headerComponent: AccountHeaderComponent,
      sidenavComponent: AccountSidenavComponent,
    },
    children: [{ path: 'email and notifications', component: AccountNotificationSetingsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
