import { ICustomer } from './../../../../../../libs/schemes/src/lib/session/models/customer.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private fns: AngularFireFunctions, private db: DbService) {}

  getAccount(uid: string): Observable<ICustomer> {
    return this.db.get$<ICustomer>(`users/${uid}/stripe/${uid}`) as Observable<ICustomer>;
  }

  onboard(): Observable<any> {
    const callable = this.fns.httpsCallable('stripeOnboard');
    return callable({});
  }

  onboardCallback(accountID: string): Observable<any> {
    const callable = this.fns.httpsCallable('stripeOnboardCallback');
    return callable({ accountID });
  }

  disconnectAccount(): Observable<any> {
    const callable = this.fns.httpsCallable('stripeDisonnectAccount');
    return callable({});
  }
}
