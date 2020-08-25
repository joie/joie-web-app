import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AccountDashboardRoutingModule } from './account-dashboard-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { StatsComponent } from './components/stats/stats.component';
import { SessionsListPopupComponent } from './components/sessions-list-popup/sessions-list-popup.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AccountDashboardComponent } from './account-dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountDashboardComponent,
    EventCardComponent,
    EventCalendarComponent,
    MessagePopupComponent,
    EventsListComponent,
    StatsComponent,
    SessionsListPopupComponent,
  ],
  imports: [
    SharedModule,
    AccountDashboardRoutingModule,
    ClipboardModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountDashboardModule {}
