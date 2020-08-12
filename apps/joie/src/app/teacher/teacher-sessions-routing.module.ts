import { TeacherSessionsComponent } from './teacher-sessions/teacher-sessions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from '../sessions/components/session-list/session-list.component';
import { SessionFormComponent } from './teacher-sessions/components/session-form/session-form.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherSessionsComponent,
    children: [
      { path: 'list', component: SessionListComponent },
      { path: 'add', component: SessionFormComponent },
      { path: 'edit', component: SessionFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSessionsRoutingModule {}
