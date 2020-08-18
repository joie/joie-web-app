import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { TeacherSessionsRoutingModule } from './teacher-sessions-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TeacherSessionsComponent } from './containers/teacher-sessions/teacher-sessions.component';
import { AddSessionHeaderComponent } from './components/add-session-header/add-session-header.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { SessionListModule } from '../../session-list/session-list.module';
import { SessionFormModule } from '../../session-form/session-form.module';

@NgModule({
  declarations: [
    TeacherSessionsComponent,
    AddSessionHeaderComponent,
    SessionFormComponent,
  ],
  imports: [
    TeacherSessionsRoutingModule,
    SessionFormModule,
    SessionListModule,
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
  ],
})
export class TeacherSessionsModule {}
