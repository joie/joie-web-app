import { NgModule } from '@angular/core';
import { ClassListComponent } from './components/class-list/class-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClassListComponent],
  imports: [
    CommonModule
  ],
  exports: [ClassListComponent]
})
export class ClassListModule { }
