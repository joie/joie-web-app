import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { StripeService } from './../../services/stripe/stripe.service';
import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../auth/services/auth.facade';
import { shareReplay, switchMap } from 'rxjs/operators';
import { Confirmable } from '../../shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-account-banking',
  templateUrl: './account-banking.component.html',
  styleUrls: ['./account-banking.component.scss'],
})
export class AccountBankingComponent implements OnInit {
  stripeAccount$ = this.authFacade.uid$.pipe(
    switchMap((uid) => this.stripeService.getAccount(uid)),
    shareReplay(1),
  );
  stripeAccountID: string;

  constructor(
    private stripeService: StripeService,
    private route: ActivatedRoute,
    private authFacade: AuthFacade,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    // in case we have a stripe callback
    this.stripeCallback();
  }

  stripeCallback = async () => {
    this.stripeAccountID = this.route.snapshot.queryParamMap.get('accountID');
    if (this.stripeAccountID) {
      await this.stripeService.onboardCallback(this.stripeAccountID).toPromise();
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

  // @Confirmable(`Do you want to disconnect Stripe Account?`, 'warn', 'Disconnect')
  // async disconnectStripe(): Promise<void> {
  //   const response = (await this.stripeService.disconnectAccount().toPromise()) as {
  //     message: string;
  //     type: 'error' | 'success';
  //   };

  //   this.snackBar.open(response.message, undefined, {
  //     duration: 4000,
  //     horizontalPosition: 'end',
  //     verticalPosition: 'bottom',
  //   });
  // }
}
