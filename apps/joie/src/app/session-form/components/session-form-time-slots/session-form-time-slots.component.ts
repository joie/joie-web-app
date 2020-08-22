import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';
import { SessionFormService } from '../../services/session-form.service';

enum Recurring {
  day = 'every day',
  week = 'every week',
  month = 'every month',
}

const newTimeSlot = () =>
  new FormGroup({
    date: new FormControl(null, Validators.required),
    time: new FormControl(null),
    recurring: new FormControl(null),
  });

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
export class SessionFormTimeSlotsComponent extends SessionFormExtenderComponent {
  readonly timeSlotsFormArray = new FormArray([newTimeSlot(), newTimeSlot(), newTimeSlot()]);
  recurringEnum = Recurring;
  TIME_LOTS = 'time-slots';

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [[this.TIME_LOTS, this.timeSlotsFormArray]];
  }

  get timeSlotValues() {
    return this.timeSlotsFormArray.controls.map(({ value }) => 'value-1');
  }

  get recurringKeys(): Array<string> {
    return Object.keys(Recurring);
  }

  addTimeSlot(): void {
    this.timeSlotsFormArray.push(newTimeSlot());
  }

  removeTimeSlot(i: number): void {
    this.timeSlotsFormArray.removeAt(i);
  }
}
