import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';
import { SessionFormService } from '../../services/session-form.service';

const newTimeSlot = () =>
  new FormGroup({
    date: new FormControl(null),
    time: new FormControl(null),
    duration: new FormControl(null),
  });

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
export class SessionFormTimeSlotsComponent extends SessionFormExtenderComponent {
  #timeSlotsFormArray = new FormArray([newTimeSlot()]);

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [['time-slots', this.#timeSlotsFormArray]];
  }

  addTimeSlot(): void {
    this.#timeSlotsFormArray.push(newTimeSlot());
  }

  removeTimeSlot(i: number): void {
    this.#timeSlotsFormArray.removeAt(i);
  }
}
