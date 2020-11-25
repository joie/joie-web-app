import { Component, Input, OnInit } from '@angular/core';
import { QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { SessionsService } from '../../../services/sessions/sessions.service';
import { Session } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  @Input() queryFn: QueryFn;

  sessions$: Observable<Session[]>;

  constructor(private sessionsService: SessionsService) {}

  ngOnInit(): void {
    this.sessions$ = this.sessionsService.getSessions(this.queryFn);
  }
}
