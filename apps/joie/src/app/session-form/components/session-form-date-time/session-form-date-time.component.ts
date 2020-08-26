import { Component } from '@angular/core';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-session-form-date-time',
  templateUrl: './session-form-date-time.component.html',
  styleUrls: ['./session-form-date-time.component.scss'],
})
export class SessionFormDateTimeComponent extends DynaFormBaseComponent {
  WHEN = 'when';
  constructor() {
    super();

    this.addFormControls([[this.WHEN, new FormControl(null)]]);
  }
  setDateTime(value: Date) {
    this.getFormControl(this.WHEN).patchValue(value);
  }
}
