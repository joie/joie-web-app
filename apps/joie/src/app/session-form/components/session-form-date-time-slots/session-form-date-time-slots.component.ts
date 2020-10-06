import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Recurrence } from '../../../sessions/enums';
const newTimeSlot = ({ timestamp, recurring }) =>
  new FormGroup({
    timestamp: new FormControl(timestamp, Validators.required),
    recurring: new FormControl(recurring),
  });

@Component({
  selector: 'app-session-form-date-time-slots',
  templateUrl: './session-form-date-time-slots.component.html',
  styleUrls: ['./session-form-date-time-slots.component.scss'],
})
export class SessionFormDateTimeSlotsComponent extends DynaFormBaseComponent {
  readonly timeSlotsFormArray = new FormArray([]);
  TIME_SLOTS = 'timeSlots';

  constructor() {
    super();
    if (this.session && this.session[this.TIME_SLOTS]) {
      this.session[this.TIME_SLOTS].map(timeSlot => {
        this.addTimeSlot(timeSlot);
      });
    }
    this.addControls([[this.TIME_SLOTS, this.timeSlotsFormArray]]);
  }

  get timeSlotValues() {
    return this.timeSlotsFormArray.controls.map(
      ({ value: { timestamp, recurring } }) =>
        `${recurring && `${Recurrence[recurring]} starting`} ${timestamp}`
    );
  }

  addTimeSlot(value): void {
    this.timeSlotsFormArray.push(newTimeSlot(value));
  }

  removeTimeSlot(i: number): void {
    this.timeSlotsFormArray.removeAt(i);
  }
}
