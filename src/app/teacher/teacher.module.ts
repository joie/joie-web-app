import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherProfileComponent } from './container/teacher-profile/teacher-profile.component';

@NgModule({
  declarations: [TeacherProfileComponent],
  imports: [CommonModule, SharedModule, TeacherRoutingModule, MatListModule],
})
export class TeacherModule {}
