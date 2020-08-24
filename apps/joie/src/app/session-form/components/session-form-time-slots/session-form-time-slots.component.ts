import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recurring } from '../../../sessions/models';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';
import { SessionFormService } from '../../services/session-form.service';

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
