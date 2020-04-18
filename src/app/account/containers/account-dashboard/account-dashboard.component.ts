import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  TemplateRef,
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
  @ViewChild('paymentMethodFormContainer', { read: ViewContainerRef })
  private templateViewContainerRef: ViewContainerRef;

  constructor(
    private authFacade: AuthFacade,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {
    this.user$ = this.authFacade.user$;
  }

  async loadPaymentMethod() {
    this.viewContainerRef.clear();
    const { PaymentMethodFormComponent } = await import(
      '../../components/payment-method-form/payment-method-form.component'
    );
    const component = this.cfr.resolveComponentFactory(
      PaymentMethodFormComponent
    );
    const componentRef = this.templateViewContainerRef.createComponent(
      component
    );
  }
}
