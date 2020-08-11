import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions-list-popup',
  templateUrl: './sessions-list-popup.component.html',
  styleUrls: ['./sessions-list-popup.component.scss'],
})
export class SessionsListPopupComponent implements OnInit {
  sessions;
  constructor() {}
  // todo when session-page ready each card should have a routerLink to redirect to the apropriate session's page
  ngOnInit(): void {
    this.sessions = history.state.sessions;
  }
}
