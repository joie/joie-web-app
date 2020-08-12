import { TeacherSessionsComponent } from './teacher-sessions/teacher-sessions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from '../sessions/components/session-list/session-list.component';
import { NewSessionFormComponent } from './teacher-sessions/components/new-session-form/new-session-form.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherSessionsComponent,
    children: [
      { path: 'list', component: SessionListComponent },
      { path: 'add', component: NewSessionFormComponent },
      { path: 'edit', component: NewSessionFormComponent }, // todo this route gonna have preloaded form data from router state, the component is better to be called SessionFormComponent;
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSessionsRoutingModule {}
