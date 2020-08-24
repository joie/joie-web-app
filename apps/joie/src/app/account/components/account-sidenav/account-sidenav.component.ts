import { navTabs } from './../../../teacher/teacher.mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-sidenav',
  templateUrl: './account-sidenav.component.html',
  styleUrls: ['./account-sidenav.component.scss'],
})
export class AccountSidenavComponent implements OnInit {
  tabs: string[] = navTabs;

  constructor() {}

  ngOnInit(): void {}
}
