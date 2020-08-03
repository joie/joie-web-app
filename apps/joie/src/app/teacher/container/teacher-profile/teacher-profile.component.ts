import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';
import { Observable } from 'rxjs';
import { Teacher } from '../../teacher.interfaces';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss'],
})
export class TeacherProfileComponent implements OnInit {
  tabs$: Observable<string[]>;
  teacher$: Observable<Teacher>;

  // todo add avatar

  constructor(private facadeService: TeacherFacadeService) {}
  ngOnInit(): void {
    this.tabs$ = this.facadeService.getMenuTabs();
    this.teacher$ = this.facadeService.getTeacher();
  }
}
