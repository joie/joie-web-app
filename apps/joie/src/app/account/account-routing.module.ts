import { AccountSessionsComponent } from './account-sessions/account-sessions.component';
import { AccountNotificationSetingsComponent } from './account-notification-setings/account-notification-setings.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { AccountSidenavComponent } from './components/account-sidenav/account-sidenav.component';
import { MainLayoutComponent } from './../common/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountDashboardComponent } from './containers/account-dashboard/account-dashboard.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountBankingComponent } from './account-banking/account-banking.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';
import { SessionFormComponent } from '../session-form/components/session-form/session-form.component';

const routes: Routes = [
  // { path: '', component: AccountDashboardComponent }
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      headerComponent: AccountHeaderComponent,
      sidenavComponent: AccountSidenavComponent,
    },
    children: [
      {
        path: 'sessions',
        component: AccountSessionsComponent,
        children: [
          {
            path: 'create',
            component: DialogRouterComponent,
            data: {
              dialogComponent: SessionFormComponent,
              matDialogConfig: { width: '100%', maxWidth: 900 },
            },
            outlet: 'popup',
          },
        ],
      },

      { path: 'profile', component: AccountProfileComponent },
      { path: 'banking', component: AccountBankingComponent },
      { path: 'email and notifications', component: AccountNotificationSetingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
