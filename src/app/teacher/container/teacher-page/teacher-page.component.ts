import { Component, OnInit } from '@angular/core';
import { TeacherFacadeService } from '../../service/teacher-facade.service';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss'],
})
export class TeacherPageComponent implements OnInit {
  tabs: string[];

  constructor(private facadeService: TeacherFacadeService) {}
  ngOnInit(): void {
    this.tabs = this.facadeService.getMenuTabs();
  }
}
