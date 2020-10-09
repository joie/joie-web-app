import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src';

@Component({
  selector: 'app-session-form-duration',
  templateUrl: './session-form-duration.component.html',
  styleUrls: ['./session-form-duration.component.scss'],
})
export class SessionFormDurationComponent extends DynaFormBaseComponent {
  DURATION = 'duration';

  constructor() {
    super();
    this.addControls([[this.DURATION, new FormControl(null)]]);
  }
}
