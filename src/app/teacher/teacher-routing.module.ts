import { NgModule } from '@angular/core';
import { TeacherPageComponent } from './container/teacher-page/teacher-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherPageComponent,
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
