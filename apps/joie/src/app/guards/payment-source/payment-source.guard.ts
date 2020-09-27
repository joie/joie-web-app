import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentService } from '../../services/payment/payment.service';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaymentSourceGuard implements CanActivate {
  constructor(private paymentService: PaymentService, private router: Router) {}

  getUrlTree(redirectUrl: string) {
    return this.router.createUrlTree(
      [
        'sessions',
        'dashboard',
        {
          outlets: {
            popup: ['add-payment-source'],
          },
        },
      ],
      { queryParams: { redirectUrl }, skipLocationChange: true }
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    { url }: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    console.log('KKKKKK');
    console.log(this.getUrlTree(url).toString());
    return this.paymentService.getSources().pipe(
      pluck('data', 'length'),
      map(Boolean),
      map((hasPaymentSource) => hasPaymentSource || this.getUrlTree(url))
    );
  }
}
