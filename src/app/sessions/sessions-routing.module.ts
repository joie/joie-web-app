import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { EnrollDialogConfigResolver } from './resolvers/enroll-dialog-config.resolver';
import { SessionsDashboardComponent } from './containers/sessions-dashboard/sessions-dashboard.component';
import { SessionComponent } from './containers/session/session.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';
import { SessionEnrollDialogComponent } from './components/session-enroll-dialog/session-enroll-dialog.component';
import { canActivate, redirectUnauthorizedTo, loggedIn } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const redirectUnauthorizedToLogin = (route: ActivatedRouteSnapshot) => {
  const path = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
  const params = route.queryParams;

  return pipe(
    loggedIn,
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        console.log('Saving afterLogin');
        sessionStorage.setItem('afterLogin', JSON.stringify({path, params}));
      }
    }),
    map(loggedIn => loggedIn || ['/'])
  );
};

// const redirectUnauthorizedToLogin = (route: ActivatedRouteSnapshot) => {
//   const path = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
//   const params = route.queryParams;

//   return pipe(
//     loggedIn,
//     tap((isLoggedIn) => {
//       if (!isLoggedIn) {
//         console.log('Saving afterLogin');
//         sessionStorage.setItem('afterLogin', JSON.stringify({path, params}));
//       }
//     }),
//     map(loggedIn => loggedIn || ['/'])
//   );
// };

// const redirectUnauthorizedToLogin = () =>
//   redirectUnauthorizedTo([
//     {
//       outlets: {
//         popup: ['auth'],
//       },
//     },
//   ]);

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
        ...canActivate(redirectUnauthorizedToLogin),
      },
    ],
  },
  {
    path: ':sessionId',
    component: SessionComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {}
