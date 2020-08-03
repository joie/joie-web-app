import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './container/teacher/teacher.component';

@NgModule({
  declarations: [TeacherComponent],
  imports: [SharedModule, TeacherRoutingModule, MatListModule],
})
export class TeacherModule {}
