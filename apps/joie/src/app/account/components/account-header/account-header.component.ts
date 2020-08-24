import { Component, OnInit } from '@angular/core';
import { dashboardInfoMock } from '../../../teacher/teacher.mocks';
import { of } from 'rxjs';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
})
export class AccountHeaderComponent implements OnInit {
  user$ = of(dashboardInfoMock);
  constructor() {}

  ngOnInit(): void {}
}
