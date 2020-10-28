import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Observable } from 'rxjs';
import { QueryFn } from '@angular/fire/firestore';
import { Session } from '../sessions/models';
import { take } from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class SessionsFacade {
  constructor(private db: DbService, private fns: AngularFireFunctions) {}

  getSessions(queryFn?: QueryFn) {
    return this.db.get$<Session>('sessions', queryFn) as Observable<Session[]>;
  }

  getSession(id: string) {
    return this.db.get$<Session>(`sessions/${id}`) as Observable<Session>;
  }

  setSession(id: string, data: Partial<Session>) {
    if (id) {
      const ref = `sessions/${id}`;
      return this.db.set$(ref, data).pipe(take(1));
    } else {
      const ref = 'sessions';
      return new Promise(resolve => {
        this.db.set$(ref, data).pipe(
          take(1)
        )
        .subscribe(
          (dt: any) => {
            resolve(dt.id);
        })
      })
    }
  }

  deleteSession(id: string) {
    const callable = this.fns.httpsCallable('deleteSession');
    return callable({ id });
  }
}
