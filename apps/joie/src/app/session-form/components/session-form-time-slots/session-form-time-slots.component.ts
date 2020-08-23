import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';
import { SessionFormService } from '../../services/session-form.service';

enum Recurring {
  day = 'every day',
  week = 'every week',
  month = 'every month',
}

const newTimeSlot = ({ date, time, recurring }) =>
  new FormGroup({
    date: new FormControl(date, Validators.required),
    time: new FormControl(time),
    recurring: new FormControl(recurring),
  });

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
export class SessionFormTimeSlotsComponent extends SessionFormExtenderComponent {
  readonly timeSlotsFormArray = new FormArray([]);
  TIME_LOTS = 'time-slots';

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.addFormControls([[this.TIME_LOTS, this.timeSlotsFormArray]]);
  }

  get timeSlotValues() {
    return this.timeSlotsFormArray.controls.map(
      ({ value: { date, time, recurring } }) =>
        `${recurring && `${Recurring[recurring]} starting`} ${new Date(`${date} ${time}`)}`
    );
  }

  addTimeSlot(value): void {
    this.timeSlotsFormArray.push(newTimeSlot(value));
  }

  removeTimeSlot(i: number): void {
    this.timeSlotsFormArray.removeAt(i);
  }
}

@Component({
  selector: 'app-time-slot-form',
  template: `
    <form
      (ngSubmit)="submit()"
      [formGroup]="form"
      #documentEditForm="ngForm"
      class="layout-grid layout-grid-inline-features layout-spacing-inline-sm layout-spacing-block-sm"
    >
      <!-- ! TODO: date & time should be extracted to an independent component with a controlValueAccessor to merge both to a single timestamp -->
      <mat-form-field>
        <mat-label>Date</mat-label>
        <input type="date" matInput formControlName="date" />
      </mat-form-field>

      <mat-form-field>
        <mat-label>Time</mat-label>
        <input type="time" matInput formControlName="time" />
      </mat-form-field>

      <mat-form-field>
        <mat-label>Repeat</mat-label>
        <select matNativeControl formControlName="recurring">
          <option *ngFor="let recurring of recurringKeys" [value]="recurring">{{
            recurringEnum[recurring]
          }}</option>
        </select>
      </mat-form-field>
    </form>
  `,
})
export class TimeSlotFormComponent {
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
