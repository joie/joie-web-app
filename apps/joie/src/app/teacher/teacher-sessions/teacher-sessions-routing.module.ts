import { NgModule } from '@angular/core';
import { TeacherSessionsComponent } from './containers/teacher-sessions/teacher-sessions.component';
import { Routes, RouterModule } from '@angular/router';
// import { SessionFormComponent } from './components/session-form/session-form.component';

const routes: Routes = [
  { path: '', component: TeacherSessionsComponent },
  // { path: 'add', component: SessionFormComponent },
  // { path: 'edit', component: SessionFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSessionsRoutingModule {}
