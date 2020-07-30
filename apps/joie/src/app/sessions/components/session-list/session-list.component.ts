import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionsFacade } from 'src/app/services/sessions.facade';
import { Session } from 'src/app/models/session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent {
  sessions$: Observable<Session[]>;

  constructor(private sessionsFacade: SessionsFacade) {
    this.sessions$ = this.sessionsFacade.getSessions();
  }
}
