import { SessionConfigResolver } from './resolvers/session-config.resolver';
import { EditDialogConfigResolver } from './resolvers/edit-dialog-config.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollDialogConfigResolver } from './resolvers/enroll-dialog-config.resolver';
import { SessionsDashboardComponent } from './containers/sessions-dashboard/sessions-dashboard.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';
import { SessionEnrollDialogComponent } from './components/session-enroll-dialog/session-enroll-dialog.component';

import { AuthGuard } from '../auth/guards/auth.guard';
import { PaymentSourceGuard } from '../guards/payment-source/payment-source.guard';
import { PaymentMethodFormComponent } from '../shared/components/payment-method-form/payment-method-form.component';
import { SessionDetailsComponent } from './containers/session-details/session-details.component';
import { SessionFormComponent } from './../session-form/containers/session-form/session-form.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SessionsDashboardComponent,
    children: [
      {
        path: 'enroll/:sessionId',
        component: DialogRouterComponent,
        resolve: {
          matDialogConfig: EnrollDialogConfigResolver,
        },
        data: { dialogComponent: SessionEnrollDialogComponent },
        outlet: 'popup',
        canActivate: [AuthGuard, PaymentSourceGuard],
      },
      {
        path: 'add-payment-source/:sessionId',
        component: DialogRouterComponent,
        resolve: {
          matDialogConfig: SessionConfigResolver,
        },
        data: {
          dialogComponent: PaymentMethodFormComponent,
          matDialogConfig: { width: '500px' },
        },
        // ! guard if already logged in
        // ...canActivate(redirectUnauthorizedToLogin),
        // ...canActivate(redirectLoggedInToItems)
        outlet: 'popup',
      },
    ],
  },
  {
    path: 'details',
    component: SessionDetailsComponent,
  },
  {
    path: ':sessionId',
    children: [
      {
        path: '',
        component: SessionDetailsComponent,
      },
      {
        path: 'edit',
        component: DialogRouterComponent,
        resolve: {
          matDialogConfig: EditDialogConfigResolver,
        },
        data: {
          dialogComponent: SessionFormComponent,
          matDialogConfig: EditDialogConfigResolver,
        },
        outlet: 'popup',
      },
    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
