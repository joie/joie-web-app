import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';

@Component({
  selector: 'app-session-form-date-time',
  templateUrl: './session-form-date-time.component.html',
  styleUrls: ['./session-form-date-time.component.scss'],
})
export class SessionFormDateTimeComponent extends DynaFormBaseComponent {
  WHEN = 'when';
  constructor() {
    super();

    this.addControls([[this.WHEN, new FormControl(null)]]);
  }
  setDateTime(value: Date) {
    this.getFormControl(this.WHEN).patchValue(value);
  }
}
