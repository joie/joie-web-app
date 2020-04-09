import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [],
  imports: [CommonModule, QuicklinkModule],
  exports: [CommonModule, QuicklinkModule],
})
export class SharedModule {}
