import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { VideoComponent } from './components/video/video.component';
import { DialogRouterComponent } from './components/dialog-router/dialog-router.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [PaymentSourceComponent, VideoComponent, DialogRouterComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    PaymentSourceComponent,
    VideoComponent,
    DialogRouterComponent,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
