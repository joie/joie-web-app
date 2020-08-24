import { ProfileModule } from './../../account/profile.module';
import { TeacherProfileRoutingModule } from './teacher-profile-routing.module';
import { NgModule } from '@angular/core';
import { TeacherProfileComponent } from './teacher-profile.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TeacherProfileComponent],
  imports: [SharedModule, TeacherProfileRoutingModule, ProfileModule],
})
export class TeacherProfileModule {}
