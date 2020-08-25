import { Component, OnInit } from '@angular/core';
import { navTabs } from '../../account.mocks';

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
