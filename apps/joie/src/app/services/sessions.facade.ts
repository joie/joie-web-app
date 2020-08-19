import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Session } from '../models/session.model';
import { Observable } from 'rxjs';
import { QueryFn } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SessionsFacade {
  constructor(private db: DbService) {}

  getSessions(queryFn?: QueryFn) {
    return this.db.get$<Session>('sessions', queryFn) as Observable<Session[]>;
  }

  getSession(id: string) {
    return this.db.get$<Session>(`sessions/${id}`) as Observable<Session>;
  }
}
