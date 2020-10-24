import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionsFacade } from '../../../services/sessions.facade';
import { QueryFn } from '@angular/fire/firestore';
import { Session } from '../../../sessions/models';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  @Input() queryFn: QueryFn;

  sessions$: Observable<Session[]>;

  enrolled = true;

  constructor(private sessionsFacade: SessionsFacade) {}

  ngOnInit(): void {
    this.sessions$ = this.sessionsFacade.getSessions(this.queryFn);
  }
}
