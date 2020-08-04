import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from './../shared/shared.module';
import { TeacherNotificationsRoutingModule } from './teacher-notifications-routing.module';
import { TeacherNotificationsComponent } from './teacher-notifications/teacher-notifications.component';

@NgModule({
  declarations: [TeacherNotificationsComponent],
  imports: [
    SharedModule,
    TeacherNotificationsRoutingModule,
    MatSlideToggleModule,
    MatDividerModule,
  ],
})
export class TeacherNotificationsModule {}
