import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherListComponent } from './containers/teacher-list/teacher-list.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherListComponent,
  },
  {
    path: ':id',
    component: TeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
