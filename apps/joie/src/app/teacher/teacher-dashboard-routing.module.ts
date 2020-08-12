import { SessionsListPopupComponent } from './teacher-dashboard/components/sessions-list-popup/sessions-list-popup.component';
import { MessagePopupComponent } from './teacher-dashboard/components/message-popup/message-popup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { DialogRouterComponent } from '../shared/components/dialog-router/dialog-router.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
  },
  {
    path: 'info',
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
    outlet: 'teacherdashboardpopup',
  },
  {
    path: 'events',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionsListPopupComponent,
      matDialogConfig: { width: '500px' },
    },
    outlet: 'teacherdashboardpopup',
  },
  {
    path: 'new-session',
    component: DialogRouterComponent,
    data: {
      dialogComponent: SessionsListPopupComponent, // todo replace
      matDialogConfig: { width: '500px' },
    },
    outlet: 'teacherdashboardpopup',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDashboardRoutingModule {}
