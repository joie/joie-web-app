import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { DbService } from '../db/db.service';
import { IResponse, IStripe } from '../../../../../../libs/schemes/src';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private fns: AngularFireFunctions, private db: DbService) {}

  getAccount(uid: string): Observable<IStripe> {
    return this.db.get$<IStripe>(`users/${uid}/stripe/${uid}`) as Observable<IStripe>;
  }

  onboard(): Observable<any> {
    const callable = this.fns.httpsCallable('stripeOnboard');
    return callable({});
  }

  onboardCallback(accountID: string): Observable<any> {
    const callable = this.fns.httpsCallable('stripeOnboardCallback');
    return callable({ accountID });
  }

  async connectStripe(): Promise<void> {
    const resp = (await this.onboard().toPromise()) as IResponse;

    if (resp.type === 'success') {
      window.open(resp.data.url, '_blank');
    }
  }
}
