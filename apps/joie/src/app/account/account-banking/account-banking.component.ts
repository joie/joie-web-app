import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthService } from '../../auth-state/services/auth/auth.service';

import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-account-banking',
  templateUrl: './account-banking.component.html',
  styleUrls: ['./account-banking.component.scss'],
})
export class AccountBankingComponent implements AfterViewInit {

constructor(private auth: AuthService, private functions: AngularFireFunctions,  private afAuth: AngularFireAuth,) {}

@Input() amount: number;
@Input() description: string;
@ViewChild('cardElement', { read: ElementRef })
  private cardElement: ElementRef;

card;
cardErrors;
user;
loading = false;
confirmation;
private stripe: Stripe;

async ngAfterViewInit() {
  this.stripe = await loadStripe('pk_test_2iuUrsVhJB1IVAhu1KnRYSFA00elnKh57f');
  const elements = this.stripe.elements();

  this.card = elements.create('card');
  this.card.mount(this.cardElement.nativeElement);

  this.card.addEventListener('change', ({ error }) => {
      this.cardErrors = error && error.message;
  });
}

async handleForm(e) {
  e.preventDefault();

  const { source, error } = await this.stripe.createSource(this.card);

  if (error) {
    // Inform the customer that there was an error.
    this.cardErrors = error.message;
  } else {
    // Send the token to your server.
    this.loading = true;
    this.afAuth.authState.subscribe(res => this.user = res);
    const paymentFun = this.functions.httpsCallable('stripeCreateCharge');
    this.confirmation = await paymentFun({ source: source.id, uid: '7L83A7x4myXc8OYGI1vTMOIgr5C3', amount: 15 }).toPromise();
    this.loading = false;

  }
}
}
