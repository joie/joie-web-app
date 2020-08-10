import { MessagePopupComponent } from './teacher-dashboard/components/message-popup/message-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { EventCardComponent } from './teacher-dashboard/components/event-card/event-card.component';
import { EventCalendarComponent } from './teacher-dashboard/components/event-calendar/event-calendar.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    TeacherDashboardComponent,
    EventCardComponent,
    EventCalendarComponent,
    MessagePopupComponent,
  ],
  imports: [
    TeacherDashboardRoutingModule,
    CommonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ClipboardModule,
  ],
})
export class TeacherDashboardModule {}
