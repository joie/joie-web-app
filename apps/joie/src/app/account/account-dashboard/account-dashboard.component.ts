import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Observable } from 'rxjs';
import { Stat } from '../../models/account.model';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
  stats$: Observable<Stat[]>; // todo yet only teacher is supposed to have a dashboard
  sessions$; //todo interface

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.stats$ = this.accountService.getDashboardStats('user123');

    this.sessions$ = this.accountService.getSessions('user123');
  }
}
