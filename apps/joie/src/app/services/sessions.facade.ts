import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Session } from '../models/session.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionsFacade {
  constructor(private db: DbService) {}

  getSessions() {
    return this.db.get$<Session>('sessions') as Observable<Session[]>;
  }

  getSession(id: string) {
    return this.db.get$<Session>(`sessions/${id}`) as Observable<Session>;
  }
}
