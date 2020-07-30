import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TeacherPageComponent } from './container/teacher-page/teacher-page.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  declarations: [TeacherPageComponent],
  imports: [CommonModule, SharedModule, TeacherRoutingModule, MatListModule],
})
export class TeacherModule {}
