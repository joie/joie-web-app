import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-table',
  templateUrl: './form-array-table.component.html',
  styleUrls: ['./form-array-table.component.scss'],
})
export class FormArrayTableComponent implements OnChanges {
  @Input() values: string[];
  @Output() remove = new EventEmitter();
  displayedColumns: string[] = ['value', 'action'];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.values);
  }
}
