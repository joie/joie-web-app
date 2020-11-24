import { Injectable } from '@angular/core';
import { DbService } from '../db/db.service';
import { Observable } from 'rxjs';
import { QueryFn, AngularFirestore, } from '@angular/fire/firestore';
import { Session } from '../../../../../../libs/schemes/src';
import { take } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(
    private db: DbService,
    private fns: AngularFireFunctions,
    private afs: AngularFirestore,
    ) {}

  getSessions(queryFn?: QueryFn) {
    return this.db.get$<Session>('sessions', queryFn) as Observable<Session[]>;
  }

  getSessionsData(path: string, page, pageSize, queryFn?: QueryFn) {
    return this.afs.collection(path, queryFn => queryFn
      .orderBy('eventId', 'desc')
      .startAt(page)
      .endAt(pageSize)
    ).snapshotChanges();
  }

  getSessionsNext(path: string, pageSize, startAfter, queryFn?: QueryFn) {
    return this.afs.collection(path, queryFn => queryFn
      .orderBy('eventId', 'desc')
      .startAfter(startAfter)
      .limit(pageSize)
    ).snapshotChanges();
  }

  getSessionsPrev(path: string, pageSize, prevStartAt, firstInResponse, queryFn?: QueryFn) {
    return this.afs.collection(path, queryFn => queryFn
      .orderBy('eventId', 'desc')
      .startAt(prevStartAt)
      .endBefore(firstInResponse)
      .limit(pageSize)
    ).snapshotChanges();
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
