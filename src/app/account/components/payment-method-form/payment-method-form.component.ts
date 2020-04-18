import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss'],
})
export class PaymentMethodFormComponent {
  constructor(private fns: AngularFireFunctions) {}

  onSubmit(): void {
    const callable = this.fns.httpsCallable('addPaymentSource');
    const data$ = callable({ name: 'some-data' });
    data$.subscribe(console.log);
  }
}
