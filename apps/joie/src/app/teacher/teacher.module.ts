import { NgModule } from '@angular/core';

import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeacherComponent,
  ],
  imports: [
    SharedModule,
    TeacherRoutingModule,
    SessionListModule,
    MaterialModule,
  ],
})
export class TeacherModule {}
