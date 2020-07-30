import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { TeacherPageComponent } from './container/teacher-page/teacher-page.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { EventCardComponent } from './components/teacher-dashboard/event-card/event-card.component';

@NgModule({
  declarations: [
    TeacherPageComponent,
    TeacherDashboardComponent,
    EventCardComponent,
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
  ],
})
export class TeacherModule {}
