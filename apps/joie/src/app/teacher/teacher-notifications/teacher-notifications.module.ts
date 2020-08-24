import { NgModule } from '@angular/core';
import { TeacherNotificationsRoutingModule } from './teacher-notifications-routing.module';
import { TeacherNotificationsComponent } from './teacher-notifications.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountModule } from '../../account/account.module';

@NgModule({
  declarations: [TeacherNotificationsComponent],
  imports: [SharedModule, TeacherNotificationsRoutingModule, AccountModule],
})
export class TeacherNotificationsModule {}
