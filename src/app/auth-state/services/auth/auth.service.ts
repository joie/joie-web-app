import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '../../+state/auth/models/auth.models';

@Injectable()
export class AuthService {
  get state$(): Observable<User> {
    // this.afAuth.authState.subscribe(console.log);
    return this.afAuth.authState;
  }

  constructor(private afAuth: AngularFireAuth) {}
}
