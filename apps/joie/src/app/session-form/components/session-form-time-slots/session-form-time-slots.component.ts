import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {
  SessionFormService,
  ControlTuple,
} from '../../services/session-form.service';

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
export class SessionFormTimeSlotsComponent implements OnInit, OnDestroy {
  controls: ControlTuple[] = [
    ['time-slots', new FormArray([this.createTimeSlot()])],
  ];

  constructor(private sessionFormService: SessionFormService) {}

  get form(): FormGroup {
    return this.sessionFormService.sessionForm;
  }

  get timeSlotsFormArray() {
    return this.controls[0][1] as FormArray;
  }

  ngOnInit(): void {
    this.sessionFormService.addControls(this.controls);
  }

  ngOnDestroy(): void {
    this.sessionFormService.removeControls(this.controls);
  }
  createTimeSlot(): FormGroup {
    return new FormGroup({
      date: new FormControl(''),
      time: new FormControl(''),
      duration: new FormControl(''),
    });
  }

  addTimeSlot(): void {
    this.timeSlotsFormArray.push(this.createTimeSlot());
  }

  removeTimeSlot(i) {
    this.timeSlotsFormArray.removeAt(i);
  }
}
