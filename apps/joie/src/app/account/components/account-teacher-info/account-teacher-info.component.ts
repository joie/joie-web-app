import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-teacher-info',
  templateUrl: './account-teacher-info.component.html',
  styleUrls: ['./account-teacher-info.component.scss']
})
export class AccountTeacherInfoComponent implements OnInit {
  PILLAR = 'pillar';
  LEVEL = 'level';
  ACTIVITIES = 'activities';

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event) {}

}
