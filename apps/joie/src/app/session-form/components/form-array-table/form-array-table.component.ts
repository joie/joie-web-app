import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-table',
  templateUrl: './form-array-table.component.html',
  styleUrls: ['./form-array-table.component.scss'],
})
export class FormArrayTableComponent {
  @Input() values: FormArray;
  @Output() remove = new EventEmitter();

  displayedColumns: string[] = ['value', 'action'];
}
