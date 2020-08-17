import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './containers/teacher/teacher.component'; // ! don't need it anymore?
import { TeacherSidenavComponent } from './components/teacher-sidenav/teacher-sidenav.component';
import { MainLayoutComponent } from '../common/components/main-layout/main-layout.component';
import { TeacherHeaderComponent } from './components/teacher-header/teacher-header.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {
      headerComponent: TeacherHeaderComponent,
      sidenavComponent: TeacherSidenavComponent,
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./teacher-dashboard/teacher-dashboard.module').then(
            (m) => m.TeacherDashboardModule
          ),
      },
      {
        path: 'sessions',
        loadChildren: () =>
          import('./teacher-sessions/teacher-sessions.module').then(
            (m) => m.TeacherSessionsModule
          ),
      },
      {
        path: 'email and notifications',
        loadChildren: () =>
          import('./teacher-notifications/teacher-notifications.module').then(
            (m) => m.TeacherNotificationsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./teacher-profile/teacher-profile.module').then(
            (m) => m.TeacherProfileModule
          ),
      },
      {
        path: 'banking',
        loadChildren: () =>
          import('./teacher-banking/teacher-banking.module').then(
            (m) => m.TeacherBankingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
