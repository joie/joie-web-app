import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { TeacherNotificationsRoutingModule } from './teacher-notifications-routing.module';
import { TeacherNotificationsComponent } from './teacher-notifications.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileModule } from '../../account/profile.module';

@NgModule({
  declarations: [TeacherNotificationsComponent],
  imports: [SharedModule, TeacherNotificationsRoutingModule, ProfileModule],
})
export class TeacherNotificationsModule {}
