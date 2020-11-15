import { Injectable } from '@angular/core';
import { DbService } from '../db/db.service';
import { Observable } from 'rxjs';
import { QueryFn } from '@angular/fire/firestore';
import { Session } from '../../../../../../libs/schemes/src';
import { take } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(private db: DbService, private fns: AngularFireFunctions) {}

  getSessions(queryFn?: QueryFn) {
    return this.db.get$<Session>('sessions', queryFn) as Observable<Session[]>;
  }

  getSession(id: string) {
    return this.db.get$<Session>(`sessions/${id}`) as Observable<Session>;
  }

  setSession(id: string, data: Partial<Session>) {
    const ref = id ? `sessions/${id}` : 'sessions';
    return this.db.set$(ref, data).pipe(take(1));
  }

  deleteSession(id: string) {
    const callable = this.fns.httpsCallable('deleteSession');
    return callable({ id });
  }

  sessionEnrolment(id: string): Observable<any> {
    const callable = this.fns.httpsCallable('sessionEnrolment');
    return callable({ id });
  }
}
