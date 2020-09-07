import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Session } from '../models/session.model';
import { Observable } from 'rxjs';
import { QueryFn } from '@angular/fire/firestore';
import { SessionInfo } from '../sessions/models';

@Injectable({
  providedIn: 'root',
})
export class SessionsFacade {
  constructor(private db: DbService) {}

  getSessions(queryFn?: QueryFn) {
    return this.db.get$<Session>('sessions', queryFn) as Observable<Session[]>;
  }

  getSession(id: string) {
    return this.db.get$<SessionInfo>(`sessions/${id}`) as Observable<SessionInfo>;
  }

  postSession(sessionId: string, data: SessionInfo) {
    return this.db.set$(sessionId, data);
  }

}
