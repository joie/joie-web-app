import { Teacher } from './../../models/teacher.model';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent implements OnInit {
  teacher$: Observable<Teacher>; // todo yet only teacher is supposed to have a dashboard
  sessions$; //todo interface

  constructor(private accountService: ProfileService) {}

  ngOnInit(): void {
    this.teacher$ = this.accountService.getTeacher('user123');

    this.sessions$ = this.accountService.getSessions('user123');
  }
}
