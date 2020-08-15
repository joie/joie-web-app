import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './container/teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
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
