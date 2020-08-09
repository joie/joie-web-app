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
          import('./teacher-dashboard.module').then(
            (m) => m.TeacherDashboardModule
          ),
      },
      {
        path: 'sessions',
        loadChildren: () =>
          import('./teacher-sessions.module').then(
            (m) => m.TeacherSessionsModule
          ),
      },
      {
        path: 'email and notifications',
        loadChildren: () =>
          import('./teacher-notifications.module').then(
            (m) => m.TeacherNotificationsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./teacher-profile.module').then(
            (m) => m.TeacherProfileModule
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
