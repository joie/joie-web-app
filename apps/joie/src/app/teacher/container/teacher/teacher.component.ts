import { Component, OnInit } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../teacher.interfaces';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  tabs$: Observable<string[]>;
  teacher$: Observable<Teacher>;

  // todo add avatar

  constructor(private facadeService: TeacherFacadeService) {}
  ngOnInit(): void {
    this.tabs$ = this.facadeService.getMenuTabs();
    this.teacher$ = this.facadeService.getTeacher();
  }
}
