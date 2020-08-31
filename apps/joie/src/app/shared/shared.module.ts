import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { DialogRouterComponent } from './components/dialog-router/dialog-router.component';
import { FigureImageComponent } from './components/figure-image/figure-image.component';

import { MaterialModule } from '../core/material.module';

@NgModule({
  declarations: [PaymentSourceComponent, DialogRouterComponent, FigureImageComponent],
  imports: [CommonModule, QuicklinkModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    PaymentSourceComponent,
    DialogRouterComponent,
    FigureImageComponent,
    // ! remove in favour of individual importing
    MaterialModule,
  ],
})
export class SharedModule {}
