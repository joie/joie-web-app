import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { AddSessionHeaderComponent } from './teacher-sessions/components/add-session-header/add-session-header.component';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { TeacherSessionsComponent } from './teacher-sessions/teacher-sessions.component';
import { TeacherSessionsRoutingModule } from './teacher-sessions-routing.module';
import { NewSessionFormComponent } from './teacher-sessions/components/new-session-form/new-session-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    TeacherSessionsComponent,
    AddSessionHeaderComponent,
    NewSessionFormComponent,
  ],
  imports: [
    TeacherSessionsRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule,
  ],
})
export class TeacherSessionsModule {}
