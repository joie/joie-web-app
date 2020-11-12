import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private fns: AngularFireFunctions) {}

  onboard(): Observable<any> {
    const callable = this.fns.httpsCallable('stripeOnboard');
    return callable({});
  }
}
