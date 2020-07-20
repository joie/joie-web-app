import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { VideoComponent } from './components/video/video.component';
import { DialogRouterComponent } from './components/dialog-router/dialog-router.component';
import { MaterialModule } from 'src/app/core/material.module';
import { PlayerComponent } from './components/player/player.component';
import { PlayerService } from './components/player/player.service';
@NgModule({
  declarations: [
    PaymentSourceComponent,
    VideoComponent,
    DialogRouterComponent,
    PlayerComponent,
  ],
  imports: [CommonModule, QuicklinkModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    QuicklinkModule,
    ReactiveFormsModule,
    PaymentSourceComponent,
    VideoComponent,
    DialogRouterComponent,
    PlayerComponent,
    MaterialModule,
  ],
  providers: [PlayerService],
})
export class SharedModule {}
