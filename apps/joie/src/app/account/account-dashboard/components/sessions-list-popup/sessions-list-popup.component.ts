import { AccountService } from '../../../account.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions-list-popup',
  templateUrl: './sessions-list-popup.component.html',
  styleUrls: ['./sessions-list-popup.component.scss'],
})
export class SessionsListPopupComponent implements OnInit {
  sessions;
  constructor(
    private matDialogRef: MatDialogRef<SessionsListPopupComponent>,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    const { sessions } = history.state;
    if (sessions) {
      this.sessions = sessions;
    } else {
      this.accountService.getSessions('user123').subscribe((userSessions) => {
        this.sessions = userSessions;
      });
    }
    // this.sessions = history.state.sessions; // todo need more persistent source (bug on refresh)

    this.matDialogRef
      .afterClosed()
      .subscribe(() =>
        this.router.navigate(['/account', 'dashboard', { outlets: { ['popup']: null } }])
      );
  }
}
