import { TeacherSessionsComponent } from './teacher-sessions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { SessionListComponent } from '../../session-list/session-list.component';

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
