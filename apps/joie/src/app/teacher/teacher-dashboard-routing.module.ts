import { SessionsListPopupComponent } from './teacher-dashboard/components/sessions-list-popup/sessions-list-popup.component';
import { MessagePopupComponent } from './teacher-dashboard/components/message-popup/message-popup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
    children: [],
  },
  {
    path: 'message',
    component: DialogRouterComponent,
    data: {
      dialogComponent: MessagePopupComponent,
      matDialogConfig: { width: '500px' },
    },
    outlet: 'dashboard-dialog',
  },
  {
    path: 'events',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionsListPopupComponent,
      matDialogConfig: { width: '500px' },
    },
    outlet: 'dashboard-dialog',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDashboardRoutingModule {}
