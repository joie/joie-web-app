import { NgModule } from '@angular/core';

import { TeacherListComponent } from './containers/teacher-list/teacher-list.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { SessionListModule } from '../session-list/session-list.module';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeacherListComponent,
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
