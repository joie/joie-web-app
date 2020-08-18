import { NgModule } from '@angular/core';
import { TeacherSessionsComponent } from './containers/teacher-sessions/teacher-sessions.component';
import { Routes, RouterModule } from '@angular/router';
import { DialogRouterComponent } from '../../shared/components/dialog-router/dialog-router.component';
import { SessionFormMetadataComponent } from '../../session-form-metadata/components/session-form-metadata/session-form-metadata.component';
// import { SessionFormComponent } from './components/session-form/session-form.component';

const routes: Routes = [
  { path: '', component: TeacherSessionsComponent },
  // { path: 'add', component: SessionFormComponent },
  // { path: 'edit', component: SessionFormComponent },
  {
    path: 'create',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionFormMetadataComponent,
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
