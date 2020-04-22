import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';

@NgModule({
  declarations: [PaymentSourceComponent],
  imports: [CommonModule, QuicklinkModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    PaymentSourceComponent,
  ],
})
export class SharedModule {}
