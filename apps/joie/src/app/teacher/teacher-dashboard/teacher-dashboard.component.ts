import { Component, OnInit } from '@angular/core';
import { TeacherFacadeService } from '../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher.model';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss'],
})
export class TeacherDashboardComponent implements OnInit {
  teacher$: Observable<Teacher>;
  sessions$; //todo interface

  constructor(private facadeService: TeacherFacadeService) {}

  ngOnInit(): void {
    this.teacher$ = this.facadeService.getTeacher('user123');

    this.sessions$ = this.facadeService.getSessions('user123');
  }
}
