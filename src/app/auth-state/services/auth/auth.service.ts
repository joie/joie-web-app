import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from '../../+state/auth/models/auth.models';
import { DbService } from 'src/app/services/db.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthFacade } from '../../+state/auth/facades/auth.facade';

@Injectable()
export class AuthService {
  get state$() {
    // this.afAuth.authState.subscribe(console.log);
    return this.afAuth.authState;
  }

  getUser$(uid: firebase.User['uid']): Observable<User> {
    // this.afAuth.authState.subscribe(console.log);
    return this.db.get$<User>(`users/${uid}`);
    // return of('egsd') as any;
  }

  constructor(
    private afAuth: AngularFireAuth,
    private db: DbService,
    private authFacade: AuthFacade
  ) {}

  observeAuthState() {
    this.state$.subscribe((user: firebase.User) => {
      const payload = user ? { uid: user.uid } : null;
      this.authFacade.dispatchStateChange(payload);
    });
  }
}
