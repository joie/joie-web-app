import { get } from 'lodash';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Recurrence } from '../../../sessions/enums';
import { Session } from '../../../sessions/models';

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
export class SessionFormDateTimeSlotsComponent extends DynaFormBaseComponent implements OnInit {
  readonly timeSlotsFormArray = new FormArray([]);
  TIME_SLOTS = 'timeSlots';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { session$: Observable<Session> }
    ) {
    super();
    this.addControls([[this.TIME_SLOTS, this.timeSlotsFormArray]]);
  }

  ngOnInit() {
    if (get(this.data, 'session$', false)) {
      this.data.session$.subscribe(session => {
        if (session.timeSlots) {
          this.getFormControl(this.TIME_SLOTS).setValue(this.addTimeSlot(session.timeSlots));
        }
      });
    }
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
