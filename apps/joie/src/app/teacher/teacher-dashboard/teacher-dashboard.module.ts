import { EventsListComponent } from './components/events-list/events-list.component';
import { StatsComponent } from './components/stats/stats.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SharedModule } from '../../shared/shared.module';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { SessionsListPopupComponent } from './components/sessions-list-popup/sessions-list-popup.component';

@NgModule({
  declarations: [
    TeacherDashboardComponent,
    EventCardComponent,
    EventCalendarComponent,
    MessagePopupComponent,
    EventsListComponent,
    StatsComponent,
    SessionsListPopupComponent,
  ],
  imports: [
    SharedModule,
    TeacherDashboardRoutingModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ClipboardModule,
    FormsModule,
  ],
})
export class TeacherDashboardModule {}
