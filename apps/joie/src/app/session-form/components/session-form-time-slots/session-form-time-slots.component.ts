import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SessionFormService } from '../../services/session-form.service';

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
@formControlModifier('time-slot', new FormControl(null))
export class SessionFormTimeSlotsComponent implements OnInit {
  private timeSlot = new FormControl(null);
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private sessionFormService: SessionFormService) {
    this.sessionForm.addControl('time-slot', this.timeSlot);
  }

  get sessionForm() {
    return this.sessionFormService.sessionForm;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.timeSlot.disable();
  }
}

function formControlModifier<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  const originalOnDestroy = this.ngOnDestroy.bind(this);
  return class extends constructor {
    newProperty = 'new property';
    this.ngOnDestroy = ()=>{originalOnDestroy();};
  };
}
