import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Recurring } from '../../../sessions/models';

@Component({
  selector: 'app-recurring-date-time-picker',
  templateUrl: './recurring-date-time-picker.component.html',
  styleUrls: ['./recurring-date-time-picker.component.scss'],
})
export class RecurringDateTimePickerComponent {
  @ViewChild('documentEditForm') private _documentEditForm: FormGroupDirective;
  @Output() add = new EventEmitter();
  recurringEnum = Recurring;

  form = this.fb.group({
    date: [null, Validators.required],
    time: [null, Validators.required],
    recurring: [null],
  });

  constructor(private fb: FormBuilder) {}

  get recurringKeys(): Array<string> {
    return Object.keys(Recurring);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const { value } = this.form;
    this.add.emit(value);
    this.form.reset();
  }
}
