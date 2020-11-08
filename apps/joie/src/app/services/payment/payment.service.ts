import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private fns: AngularFireFunctions) {}

  getSources(): Observable<[]> {
    const callable = this.fns.httpsCallable('stripeGetSources');
    return callable({});
  }

  attachSource(sourceId: string): Observable<any> {
    const callable = this.fns.httpsCallable('stripeAttachSource');
    return callable({ sourceId });
  }

  sessionCharge(sessionId: string, sourceId: string): Observable<any> {
    const callable = this.fns.httpsCallable('stripeSessionCharge');
    return callable({ sessionId, sourceId });
  }
}
