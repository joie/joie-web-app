import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Teacher, TeacherEvent } from '../../teacher.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss'],
})
export class TeacherDashboardComponent implements OnInit {
  teacher$: Observable<Teacher>;
  events$: Observable<TeacherEvent[]>;
  constructor(private facadeService: TeacherFacadeService) {}

  // https://github.com/angular/material/issues/5674
  //  todo https://onthecode.co.uk/angular-material-calendar-component/

  ngOnInit(): void {
    this.teacher$ = this.facadeService.getTeacher();
    this.events$ = this.facadeService.getTeacherEvents(); // todo sorted by time on server side?
  }
}
