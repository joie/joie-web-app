import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [PaymentSourceComponent, VideoComponent],
  imports: [CommonModule, QuicklinkModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    PaymentSourceComponent,
    VideoComponent
  ],
})
export class SharedModule {}
