import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recurring } from '../../../sessions/models';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

const newTimeSlot = ({ dateTime, recurring }) =>
  new FormGroup({
    dateTime: new FormControl(dateTime, Validators.required),
    recurring: new FormControl(recurring),
  });

@Component({
  selector: 'app-session-form-date-time-slots',
  templateUrl: './session-form-date-time-slots.component.html',
  styleUrls: ['./session-form-date-time-slots.component.scss'],
})
export class SessionFormDateTimeSlotsComponent extends DynaFormBaseComponent {
  readonly timeSlotsFormArray = new FormArray([]);
  DATE_TIME_SLOTS = 'dateTimeSlots';

  constructor() {
    super();
    this.addControls([[this.DATE_TIME_SLOTS, this.timeSlotsFormArray]]);
  }

  get timeSlotValues() {
    return this.timeSlotsFormArray.controls.map(
      ({ value: { dateTime, recurring } }) =>
        `${recurring && `${Recurring[recurring]} starting`} ${dateTime}`
    );
  }

  addTimeSlot(value): void {
    this.timeSlotsFormArray.push(newTimeSlot(value));
  }

  removeTimeSlot(i: number): void {
    this.timeSlotsFormArray.removeAt(i);
  }
}
