import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileComponent } from './container/teacher-profile/teacher-profile.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherProfileComponent,
    children: [
      {
        path: 'dashboard',
        component: TeacherDashboardComponent,
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
