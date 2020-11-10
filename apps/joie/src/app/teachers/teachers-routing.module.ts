import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './containers/teachers/teachers.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [{
  path: '',
  component: TeachersComponent,
  children: [
    {
      path: 'teacher/:id',
      component: TeacherComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
