import { SessionFormResolverService } from './session-form-resolver.service';
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
      {
        path: 'add',
        component: SessionFormComponent,
        resolve: { formData: SessionFormResolverService },
      },
      {
        path: 'edit',
        component: SessionFormComponent,
        resolve: { formData: SessionFormResolverService },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSessionsRoutingModule {}
