import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private fns: AngularFireFunctions) {}

  attachSource(sourceId: string) {
    const callable = this.fns.httpsCallable('stripeAttachSource');
    return callable({ sourceId }).toPromise();
  }
}
