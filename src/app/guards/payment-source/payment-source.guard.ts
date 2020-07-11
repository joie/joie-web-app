import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentSourceGuard implements CanActivate {
  constructor(private paymentService: PaymentService, private router: Router) {}

  getUrlTree(redirectUrl: string) {
    return this.router.createUrlTree(
      [
        {
          outlets: {
            popup: ['sort-payment'],
          },
        },
      ],
      { queryParams: { redirectUrl }, skipLocationChange: true }
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    console.log(this.getUrlTree(state.url));
    return this.paymentService.getSources().pipe(
      pluck('data', 'length'),
      map(Boolean),
      map((hasPaymentSource) => hasPaymentSource || this.getUrlTree(state.url))
    );
  }
}
