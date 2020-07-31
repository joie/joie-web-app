import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { EventCardComponent } from './components/teacher-dashboard/event-card/event-card.component';
import { EventCalendarComponent } from './components/teacher-dashboard/event-calendar/event-calendar.component';
import { TeacherProfileComponent } from './container/teacher-profile/teacher-profile.component';

@NgModule({
  declarations: [
    TeacherProfileComponent,
    TeacherDashboardComponent,
    EventCardComponent,
    EventCalendarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeacherRoutingModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class TeacherModule {}
