import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './tabs/teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileComponent } from './container/teacher-profile/teacher-profile.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherProfileComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./tabs/teacher-dashboard/teacher-dashboard.module').then(
            (m) => m.TeacherDashboardModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
