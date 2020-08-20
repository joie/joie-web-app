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
  // controls: ControlTuple[] = [['time-slot', new FormControl(null)]];
  controls: ControlTuple[] = [
    ['time-slots', new FormArray([this.createTimeSlot()])],
  ]; // todo instead of wrapping it in brackets here, could do it when passing controlls to service or better change it at upper level

  myFilter(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

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
