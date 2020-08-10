import { MessagePopupComponent } from './teacher-dashboard/components/message-popup/message-popup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherDashboardComponent,
  },
  {
    path: 'message',
    component: MessagePopupComponent,
    outlet: 'popup',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDashboardRoutingModule {}
