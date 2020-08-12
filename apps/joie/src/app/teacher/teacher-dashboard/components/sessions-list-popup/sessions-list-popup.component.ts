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
    private router: Router
  ) {}
  // todo when session-page ready each card should have a routerLink to redirect to the apropriate session's page
  ngOnInit(): void {
    this.sessions = history.state.sessions;

    this.matDialogRef
      .afterClosed()
      .subscribe(() =>
        this.router.navigate([
          '/teacher',
          'dashboard',
          { outlets: { ['dashboard-dialog']: null } },
        ])
      );
  }
}
