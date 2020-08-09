import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: TeacherProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherProfileRoutingModule {}
