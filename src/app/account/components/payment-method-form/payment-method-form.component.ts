import {
  Component,
  ViewChild,
  ElementRef,
  NgModule,
  OnInit,
} from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { style } from './stripe-elements.style';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

const STRIPE_KEY = 'pk_test_2iuUrsVhJB1IVAhu1KnRYSFA00elnKh57f';
// declare var Stripe: stripe.StripeStatic;

@Component({
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss'],
})
export class PaymentMethodFormComponent implements OnInit {
  @ViewChild('cardElement', { read: ElementRef })
  private cardElement: ElementRef;
  stripe: Stripe;

  constructor(private fns: AngularFireFunctions) {
    // this.mountCard();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async mountCard() {
    this.stripe = await loadStripe(STRIPE_KEY);
    const elements = this.stripe.elements();
    const card = elements.create('card', { style: style });
    console.log(this.cardElement.nativeElement);
    // card.mount(this.cardElement.nativeElement);
  }

  onSubmit(): void {
    const callable = this.fns.httpsCallable('addPaymentSource');
    const data$ = callable({ name: 'some-data' });
    data$.subscribe(console.log);
    console.log(this.stripe);
  }
}

@NgModule({
  declarations: [PaymentMethodFormComponent],
  imports: [CommonModule],
})
export class PaymentSourceFormModule {}
