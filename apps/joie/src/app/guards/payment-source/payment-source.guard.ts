/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PaymentService } from '../../services/payment/payment.service';
import { map, pluck, catchError } from 'rxjs/operators';

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
      { queryParams: { redirectUrl }, skipLocationChange: true },
    );
  }

  canActivate(next: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): Observable<boolean | UrlTree> {
    this.paymentService.getSources().subscribe(console.log);
    return this.paymentService.getSources().pipe(
      pluck('data'),
      map(Boolean),
      map((hasPaymentSource) => hasPaymentSource || this.getUrlTree(url)),
      catchError((error, caught) => {
        return of(this.getUrlTree(url));
      }),
    );
  }
}
