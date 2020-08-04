import { TeacherSessionsModule } from './teacher-sessions.module';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
