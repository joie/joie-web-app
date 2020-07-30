import { NgModule } from '@angular/core';
import { TeacherPageComponent } from './container/teacher-page/teacher-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TeacherPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
