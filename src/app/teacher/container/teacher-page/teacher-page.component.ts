import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../teacher.interfaces';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss'],
})
export class TeacherPageComponent implements OnInit {
  tabs$: Observable<string[]>;
  teacher$: Observable<Teacher>;

  constructor(private facadeService: TeacherFacadeService) {}
  ngOnInit(): void {
    this.tabs$ = this.facadeService.getMenuTabs();
    this.teacher$ = this.facadeService.getTeacher();
  }
}
