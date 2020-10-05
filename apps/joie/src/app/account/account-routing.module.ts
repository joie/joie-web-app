import { AccountNotificationSetingsComponent } from './account-notification-setings/account-notification-setings.component';
import { AccountSidenavComponent } from './components/account-sidenav/account-sidenav.component';
import { MainLayoutComponent } from './../common/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AccountBankingComponent } from './account-banking/account-banking.component';

const routes: Routes = [
  // { path: '', component: AccountDashboardComponent }
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      sidenavComponent: AccountSidenavComponent,
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./account-dashboard/account-dashboard.module').then(
            (m) => m.AccountDashboardModule
          ),
      },
      {
        path: 'sessions',
        loadChildren: () =>
          import('./account-sessions/account-sessions.module').then((m) => m.AccountSessionsModule),
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
