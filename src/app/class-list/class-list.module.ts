import { NgModule } from '@angular/core';
import { ClassListComponent } from './components/class-list/class-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ClassListComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ClassListComponent]
})
export class ClassListModule { }
