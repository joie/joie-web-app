import { TeacherFacadeService } from './../../service/teacher-facade.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-sidenav',
  templateUrl: './teacher-sidenav.component.html',
  styleUrls: ['./teacher-sidenav.component.scss'],
})
export class TeacherSidenavComponent implements OnInit {
  tabs$: Observable<string[]>;
  constructor(private facadeService: TeacherFacadeService) {}

  ngOnInit(): void {
    this.tabs$ = this.facadeService.getMenuTabs();
  }
}
