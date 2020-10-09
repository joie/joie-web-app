import { Component, EventEmitter, Output, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';
import { Recurrence } from '../../../sessions/enums';

// JavaScript Date object transforms to a Firestore Timestamp
const dateTimeToDateObj = (date: string, time: string) => new Date(`${date} ${time}`);

@Component({
  selector: 'app-recurring-date-time-picker',
  templateUrl: './recurring-date-time-picker.component.html',
  styleUrls: ['./recurring-date-time-picker.component.scss'],
})
export class RecurringDateTimePickerComponent implements OnDestroy {
  // @ViewChild('documentEditForm') private documentEditForm: FormGroupDirective;
  @ViewChild('datePicker') datePicker: ElementRef;
  @Output() submission = new EventEmitter();
  @Output() formChange = new EventEmitter();
  recurringEnum = Recurrence;
  minDate: Date;

  private stop$ = new Subject();

  form = this.fb.group({
    date: [null, Validators.required],
    time: [null, Validators.required],
    recurring: [null],
  });

  constructor(private fb: FormBuilder) {
    this.minDate = new Date();

    this.form.valueChanges
      .pipe(
        takeUntil(this.stop$),
        filter(() => this.form.valid),
        map(this.normalizeValue)
      )
      .subscribe(this.formChange);
  }

  ngOnDestroy() {
    this.stop$.next();
  }

  get value() {
    return this.form.value;
  }

  get recurringKeys(): Array<string> {
    return Object.keys(Recurrence);
  }

  private normalizeValue(formValue) {
    const { time, recurring } = formValue;
    let date = this.transformDate(formValue.date);
    const timestamp: Date = dateTimeToDateObj(date, time);
    return { timestamp, recurring };
  }

  private transformDate(date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.submission.emit(this.normalizeValue(this.form.value));
    this.form.reset();
    this.datePicker.nativeElement.focus();
  }
}
