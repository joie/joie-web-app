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

  constructor(private fns: AngularFireFunctions) {}

  async ngAfterViewInit(): Promise<void> {
    this.card = await this.mountCard();
    // Handle real-time validation errors from the card Element.
    this.cardValidate();
  }

  private cardValidate() {
    this.card.on('change', ({ error }) => {
      this.cardErrors = error?.message;
    });
  }

  async mountCard() {
    this.stripe = await loadStripe(STRIPE_KEY);
    const elements = this.stripe.elements();
    const card = elements.create('card', { style: style });
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
      const callable = this.fns.httpsCallable('stripeAttachSource');
      console.log(source);
      const res = await callable({ source: source.id }).toPromise();
      //    data$.subscribe(console.log);
      console.log(res);

      // // Send the token to your server.
      // this.loading = true;
      // const user = await this.auth.getUser();
      // // onSubmit(): void {
      // //   const callable = this.fns.httpsCallable('addPaymentSource');
      // //   const data$ = callable({ name: 'some-data' });
      // //   data$.subscribe(console.log);
      // //   console.log(this.stripe);
      // // }
      // const fun = this.functions.httpsCallable('stripeCreateCharge');
      // this.confirmation = await fun({
      //   source: source.id,
      //   uid: user.uid,
      //   amount: this.amount,
      // }).toPromise();
      // this.loading = false;
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
