import { NgModule } from '@angular/core';
import { TeacherSessionsComponent } from './containers/teacher-sessions/teacher-sessions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: TeacherSessionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSessionsRoutingModule {}
