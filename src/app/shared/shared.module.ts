import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { VideoComponent } from './components/video/video.component';
import { DialogRouterComponent } from './components/dialog-router/dialog-router.component';
import { FigureImageComponent } from './components/figure-image/figure-image.component';

@NgModule({
  declarations: [
    PaymentSourceComponent,
    VideoComponent,
    DialogRouterComponent,
    FigureImageComponent,
  ],
  imports: [CommonModule, QuicklinkModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    PaymentSourceComponent,
    VideoComponent,
    DialogRouterComponent,
    FigureImageComponent,
  ],
})
export class SharedModule {}
