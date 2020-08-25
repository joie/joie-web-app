import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { dashboardInfoMock } from '../../account.mocks';

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
