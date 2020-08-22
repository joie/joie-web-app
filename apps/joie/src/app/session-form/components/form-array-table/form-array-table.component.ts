import { Component, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-table',
  templateUrl: './form-array-table.component.html',
  styleUrls: ['./form-array-table.component.scss'],
})
export class FormArrayTableComponent {
  @Input() controls: FormArray;
  displayedColumns: string[] = ['value'];
  dataSource = this.controls;

  remove(i: number): void {
    this.controls.removeAt(i);
  }
}
