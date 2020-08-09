import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherNotificationsComponent } from './teacher-notifications/teacher-notifications.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherNotificationsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherNotificationsRoutingModule {}
