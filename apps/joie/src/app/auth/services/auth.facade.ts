import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Owner } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  readonly user$ = this.afAuth.authState;
  readonly uid$ = this.user$.pipe(pluck('uid')); // TODO move to an auth facade
  readonly displayName$ = this.user$.pipe(pluck('displayName')); // TODO move to an auth facade
  readonly owner$: Observable<Owner> = this.user$.pipe(
    map(({ uid, displayName, photoURL }) => ({ uid, displayName, photoURL })),
  );

  constructor(private afAuth: AngularFireAuth) {}
}
