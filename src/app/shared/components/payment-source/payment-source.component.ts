import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  Injector,
} from '@angular/core';

@Component({
  selector: 'app-payment-source',
  template: `
    <button (click)="loadPaymentSourceForm()">
      open payment source form
    </button>
    <ng-container #paymentSourceFormContainer></ng-container>
  `,
})
export class PaymentSourceComponent {
  @ViewChild('paymentSourceFormContainer', { read: ViewContainerRef })
  private paymentSourceFormContainer: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  // TODO move to a dedicated service
  async loadPaymentSourceForm() {
    const { PaymentMethodFormComponent: component } = await import(
      '../payment-method-form/payment-method-form.component'
    );
    const paymentSourceFormFactory = this.cfr.resolveComponentFactory(
      component
    );
    const { instance } = this.paymentSourceFormContainer.createComponent(
      paymentSourceFormFactory,
      null,
      this.injector
    );
    // instance.ngOnInit();
  }
}
