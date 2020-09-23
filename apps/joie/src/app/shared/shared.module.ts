import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { DialogRouterComponent } from './components/dialog-router/dialog-router.component';
import { FigureImageComponent } from './components/figure-image/figure-image.component';
import { IconComponent } from './components/icon/icon.component';
import { ImageUploadSelectComponent } from './components/image-upload-select/image-upload-select.component';

import { MaterialModule } from '../core/material.module';
import { FireImgRefDirective } from './directives/fire-img-ref/fire-img-ref.directive';

@NgModule({
  declarations: [
    PaymentSourceComponent,
    DialogRouterComponent,
    FigureImageComponent,
    IconComponent,
    ImageUploadSelectComponent,
    FireImgRefDirective,
  ],
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
    IconComponent,
    ImageUploadSelectComponent,
    FireImgRefDirective,
  ],
})
export class SharedModule {}
