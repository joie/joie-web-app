import {
  Component,
  ViewChild,
  ElementRef,
  NgModule,
  AfterViewInit,
} from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';
import { style } from './stripe-elements.style';
import { CommonModule } from '@angular/common';

const STRIPE_KEY = 'pk_test_2iuUrsVhJB1IVAhu1KnRYSFA00elnKh57f';
// declare var Stripe: stripe.StripeStatic;

@Component({
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss'],
})
export class PaymentMethodFormComponent implements AfterViewInit {
  @ViewChild('cardElement', { read: ElementRef })
  private cardElement: ElementRef;
  private stripe: Stripe;
  private card: StripeCardElement;
  cardErrors: string;
  isLoading = true;

  constructor(private fns: AngularFireFunctions) {}

  async ngAfterViewInit(): Promise<void> {
    this.card = await this.mountCard();
    // Handle real-time validation errors from the card Element.
    this.cardValidate();
    await this.cardAvailable();
    this.isLoading = false;
    this.card.focus();
  }

  private cardAvailable() {
    const promise = new Promise((resolve) => {
      this.card.on('ready', async () => {
        return resolve();
      });
    });
    return promise;
  }

  private cardValidate() {
    this.card.on('change', ({ error }) => {
      this.cardErrors = error?.message;
    });
  }

  async mountCard() {
    this.stripe = await loadStripe(STRIPE_KEY);
    const elements = this.stripe.elements();
    const card = elements.create('card', { style });
    card.mount(this.cardElement.nativeElement);
    return card;
  }

  async onSubmit(e) {
    e.preventDefault();

    const { source, error } = await this.stripe.createSource(this.card, null);

    if (error) {
      // Inform the customer that there was an error.
      this.cardErrors = error.message;
    } else {
      this.isLoading = true;
      // Send the token to your server.
      const callable = this.fns.httpsCallable('stripeAttachSource');
      const res = await callable({ sourceId: source.id }).toPromise();
      console.log(res);
      this.isLoading = false;
    }
  }
}

@NgModule({
  declarations: [PaymentMethodFormComponent],
  imports: [CommonModule],
})
export class PaymentSourceFormModule {}

// // Submit the form with the token ID.
// function stripeTokenHandler(token) {
//   // Insert the token ID into the form so it gets submitted to the server
//   var form = document.getElementById('payment-form');
//   var hiddenInput = document.createElement('input');
//   hiddenInput.setAttribute('type', 'hidden');
//   hiddenInput.setAttribute('name', 'stripeToken');
//   hiddenInput.setAttribute('value', token.id);
//   form.appendChild(hiddenInput);

//   // Submit the form
//   form.submit();
// }