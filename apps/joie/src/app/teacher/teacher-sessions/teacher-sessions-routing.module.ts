import { NgModule } from '@angular/core';
import { TeacherSessionsComponent } from './containers/teacher-sessions/teacher-sessions.component';
import { Routes, RouterModule } from '@angular/router';
import { DialogRouterComponent } from '../../shared/components/dialog-router/dialog-router.component';
import { SessionFormComponent } from '../../session-form/components/session-form/session-form.component';
// import { SessionFormComponent } from './components/session-form/session-form.component';

const routes: Routes = [
  { path: '', component: TeacherSessionsComponent },
  // { path: 'add', component: SessionFormComponent },
  // { path: 'edit', component: SessionFormComponent },
  {
    path: 'create',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionFormComponent,
      matDialogConfig: { width: '100%', maxWidth: 900 },
    },
    outlet: 'popup',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherSessionsRoutingModule {}
