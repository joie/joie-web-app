import { Component, OnInit } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../../models/teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  teacher$: Observable<Teacher>;

  constructor(private facadeService: TeacherFacadeService) {}

  ngOnInit(): void {
    this.teacher$ = this.facadeService.getTeacher('user123');
  }
}
