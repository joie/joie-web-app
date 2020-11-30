import { ActivatedRoute } from '@angular/router';
import { StripeService } from './../../services/stripe/stripe.service';
import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../auth/services/auth.facade';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-account-banking',
  templateUrl: './account-banking.component.html',
  styleUrls: ['./account-banking.component.scss'],
})
export class AccountBankingComponent implements OnInit {
  stripeAccount$ = this.authFacade.uid$.pipe(
    switchMap((uid) => this.stripeService.getAccount(uid).pipe(pluck('accountId'))),
    shareReplay(1),
  );
  stripeAccountID: string;

  constructor(private stripeService: StripeService, private route: ActivatedRoute, private authFacade: AuthFacade) {}

  ngOnInit(): void {
    // in case we have a stripe callback
    this.listenStripeCallback();
  }

  async listenStripeCallback(): Promise<void> {
    this.stripeAccountID = this.route.snapshot.queryParamMap.get('accountID');
    if (this.stripeAccountID) {
      await this.stripeService.onboardCallback(this.stripeAccountID).toPromise();
    }
    window.close();
  }

  async connectStripe(): Promise<void> {
    await this.stripeService.connectStripe();
  }
}
