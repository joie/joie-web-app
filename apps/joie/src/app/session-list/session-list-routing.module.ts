import { SessionListComponent } from './components/session-list/session-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';
import { EnrollDialogConfigResolver } from '../sessions/resolvers/enroll-dialog-config.resolver';
import { SessionEnrollDialogComponent } from '../sessions/components/session-enroll-dialog/session-enroll-dialog.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PaymentSourceGuard } from '../guards/payment-source/payment-source.guard';
import { PaymentMethodFormComponent } from '../shared/components/payment-method-form/payment-method-form.component';

const routes: Routes = [
  {
    path: '',
    component: SessionListComponent,
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
        path: 'add-payment-source',
        component: DialogRouterComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionListRoutingModule {}
