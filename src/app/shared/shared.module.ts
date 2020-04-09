import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, QuicklinkModule, ReactiveFormsModule],
  exports: [CommonModule, QuicklinkModule, ReactiveFormsModule],
})
export class SharedModule {}
