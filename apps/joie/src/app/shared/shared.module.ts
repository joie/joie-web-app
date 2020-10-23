import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';

import { JoiePrefixPipe } from './pipes/joie-prefix/joie-prefix.pipe';

import { PaymentSourceComponent } from './components/payment-source/payment-source.component';
import { DialogRouterComponent } from './components/dialog-router/dialog-router.component';
import { FigureImageComponent } from './components/figure-image/figure-image.component';
import { IconComponent } from './components/icon/icon.component';
import { ImageUploadSelectComponent } from './components/image-upload-select/image-upload-select.component';
import { SubscribeToNewsletterComponent } from './components/subscribe-to-newsletter/subscribe-to-newsletter.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

import { MaterialModule } from '../core/material.module';
import { FireStorageRefDirective } from './directives/fire-storage-ref/fire-storage-ref.directive';
import { PaperItemComponent } from './components/paper-item/paper-item.component';

@NgModule({
  declarations: [
    PaymentSourceComponent,
    DialogRouterComponent,
    FigureImageComponent,
    IconComponent,
    ImageUploadSelectComponent,
    SubscribeToNewsletterComponent,
    FireStorageRefDirective,
    PaperItemComponent,
    ConfirmationDialogComponent,
    JoiePrefixPipe,
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
    SubscribeToNewsletterComponent,
    FireStorageRefDirective,
    PaperItemComponent,
    ConfirmationDialogComponent,
    JoiePrefixPipe,
  ],
})
export class SharedModule {}
