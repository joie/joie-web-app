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
    this.addControls([[this.TIME_SLOTS, this.timeSlotsFormArray]]);
  }

  get timeSlotValues() {
    return this.timeSlotsFormArray.controls.map(
      ({ value: { timestamp, recurring, duration } }) =>
        `${recurring && `${Recurrence[recurring]} starting`} ${timestamp}`
    );
  }

  addTimeSlot(value): void {
    value.timestamp = this.transformDate(value.timestamp);
    this.timeSlotsFormArray.push(newTimeSlot(value));
  }

  removeTimeSlot(i: number): void {
    this.timeSlotsFormArray.removeAt(i);
  }

  private transformDate(date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`;
  }
}
