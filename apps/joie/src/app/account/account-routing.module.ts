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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
