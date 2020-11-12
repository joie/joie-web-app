import { StripeService } from './../../services/stripe/stripe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-banking',
  templateUrl: './account-banking.component.html',
  styleUrls: ['./account-banking.component.scss'],
})
export class AccountBankingComponent implements OnInit {
  constructor(private stripeService: StripeService) {}

  ngOnInit(): void {}

  async connectStripe(): Promise<void> {
    const resp = (await this.stripeService.onboard().toPromise()) as {
      type: 'success' | 'error';
      data?: any;
      message: string;
    };

    if (resp.type === 'success') {
      window.open(resp.data.url, '_blank');
    }
  }
}
