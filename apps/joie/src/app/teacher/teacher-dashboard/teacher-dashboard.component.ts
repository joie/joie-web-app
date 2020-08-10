import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TeacherFacadeService } from '../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher.model';
import { TeacherEvent } from '../../models/event.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss'],
})
export class TeacherDashboardComponent implements OnInit {
  teacher$: Observable<Teacher>;
  // events$: Observable<TeacherEvent[]>;
  constructor(private facadeService: TeacherFacadeService) {}

  ngOnInit(): void {
    this.teacher$ = this.facadeService.getTeacher('user123');

    // this.events$ = this.facadeService.getTeacherEvents(); // todo sorted by time on server side?

    // todo define what should be the submit for the dashboard //check reply on figma // handle submit in the same service as initial fetch, inject via facade
  }
}
