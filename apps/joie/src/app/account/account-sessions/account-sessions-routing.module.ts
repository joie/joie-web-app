import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSessionsComponent } from './account-sessions.component';
import { DialogRouterComponent } from '../../shared/components/dialog-router/dialog-router.component';
import { SessionFormComponent } from '../../session-form/components/session-form/session-form.component';

const routes: Routes = [
  { path: '', component: AccountSessionsComponent },
  {
    path: 'create',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionFormComponent,
      matDialogConfig: { width: '100%', maxWidth: 900 },
    },
    outlet: 'popup',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSessionsRoutingModule {}