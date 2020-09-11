import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-table',
  templateUrl: './form-array-table.component.html',
  styleUrls: ['./form-array-table.component.scss'],
})
export class FormArrayTableComponent implements OnChanges {
  @Input() values: string[];
  // @Input()
  // get values(): any[] {
  //   return this._values;
  // }
  // set values(value: FormArray) {
  //   this._values = value && value.value;
  // }
  // private _values;

  @Output() remove = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.values);
  }

  displayedColumns: string[] = ['value', 'action'];
}
