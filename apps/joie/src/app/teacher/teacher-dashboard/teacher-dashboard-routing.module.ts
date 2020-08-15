import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { DialogRouterComponent } from '../../shared/components/dialog-router/dialog-router.component';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { SessionsListPopupComponent } from './components/sessions-list-popup/sessions-list-popup.component';

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
