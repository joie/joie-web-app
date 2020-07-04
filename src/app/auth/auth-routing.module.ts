import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './containers/log-in/log-in.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';

const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'log-in',
        component: DialogRouterComponent,
        // resolve: {
        //   matDialogConfig: {},
        // },
        data: { dialogComponent: LogInComponent },
        //! guard if already logged in
        // ...canActivate(redirectUnauthorizedToLogin),
      },
    ],
  },
  // { path: '', component: LogInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
