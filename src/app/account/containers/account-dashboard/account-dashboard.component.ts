import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Injector,
} from '@angular/core';
import { AuthFacade } from 'src/app/auth-state/+state/auth/facades/auth.facade';
import { User } from 'src/app/auth-state/+state/auth/models/auth.models';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent {
  user$: Observable<User>;

  @ViewChild('paymentSourceFormContainer', { read: ViewContainerRef })
  private paymentSourceFormContainer: ViewContainerRef;

  constructor(
    private authFacade: AuthFacade,
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {
    this.user$ = this.authFacade.user$;
  }

  // TODO move to a dedicated service
  async loadPaymentSourceForm() {
    const { PaymentMethodFormComponent: component } = await import(
      '../../components/payment-method-form/payment-method-form.component'
    );
    const paymentSourceFormFactory = this.cfr.resolveComponentFactory(
      component
    );
    const { instance } = this.paymentSourceFormContainer.createComponent(
      paymentSourceFormFactory,
      null,
      this.injector
    );
  }
}
