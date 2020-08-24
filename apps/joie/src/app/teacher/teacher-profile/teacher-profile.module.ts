import { TeacherProfileRoutingModule } from './teacher-profile-routing.module';
import { NgModule } from '@angular/core';
import { TeacherProfileComponent } from './teacher-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountModule } from '../../account/account.module';

@NgModule({
  declarations: [TeacherProfileComponent],
  imports: [SharedModule, TeacherProfileRoutingModule, AccountModule],
})
export class TeacherProfileModule {}
