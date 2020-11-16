import { environment } from './../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { StripeService } from './../../services/stripe/stripe.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-banking',
  templateUrl: './account-banking.component.html',
  styleUrls: ['./account-banking.component.scss'],
})
export class AccountBankingComponent implements OnInit {
  stripeAccountID: string;

  constructor(private stripeService: StripeService, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // in case we have a stripe callback
    this.stripeCallback();
  }

  stripeCallback = (): void => {
    this.stripeAccountID = this.route.snapshot.queryParamMap.get('accountID');
    if (this.stripeAccountID) {
      this.stripeService.onboardCallback(this.stripeAccountID).toPromise();
    }
    window.close();
  };

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
