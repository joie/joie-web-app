import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TeacherFacadeService } from '../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher.model';
import { TeacherEvent } from '../../models/event.model';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss'],
})
export class TeacherDashboardComponent implements OnInit {
  teacher$: Observable<Teacher>;
  events$: Observable<TeacherEvent[]>;
  constructor(private facadeService: TeacherFacadeService) {}

  ngOnInit(): void {
    this.teacher$ = this.facadeService.getTeacher();
    this.events$ = this.facadeService.getTeacherEvents(); // todo sorted by time on server side?
  }
}
