import { NgModule } from '@angular/core';
import { AccountDashboardComponent } from './account-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DialogRouterComponent } from '../../shared/components/dialog-router/dialog-router.component';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { SessionsListPopupComponent } from './components/sessions-list-popup/sessions-list-popup.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDashboardComponent,
    children: [],
  },
  {
    path: 'message',
    component: DialogRouterComponent,
    data: {
      dialogComponent: MessagePopupComponent,
      matDialogConfig: { width: '500px' },
    },
    outlet: 'popup',
  },
  {
    path: 'sessions',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionsListPopupComponent,
      matDialogConfig: { width: '500px' },
    },
    outlet: 'popup',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDashboardRoutingModule {}
