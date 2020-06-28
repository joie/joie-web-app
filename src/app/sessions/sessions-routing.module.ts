import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollDialogConfigResolver } from './resolvers/enroll-dialog-config.resolver';
import { SessionsDashboardComponent } from './containers/sessions/sessions-dashboard.component';
import { SessionComponent } from './containers/session/session.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';
import { SessionEnrollDialogComponent } from './components/session-enroll-dialog/session-enroll-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: SessionsDashboardComponent,
  },
  {
    path: ':sessionId',
    component: SessionComponent,
    children: [
      {
        path: 'enroll',
        component: DialogRouterComponent,
        resolve: {
          matDialogConfig: EnrollDialogConfigResolver
        },
        data: { dialogComponent: SessionEnrollDialogComponent },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
