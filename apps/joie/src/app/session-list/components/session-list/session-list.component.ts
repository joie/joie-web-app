import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionsFacade } from '../../../services/sessions.facade';
import { Session } from '../../../models';
import { QueryFn } from '@angular/fire/firestore';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  @Input() queryFn: QueryFn;

  sessions$: Observable<Session[]>;

  constructor(private sessionsFacade: SessionsFacade) {}

  ngOnInit(): void {
    this.sessions$ = this.sessionsFacade.getSessions(this.queryFn);
  }
}
