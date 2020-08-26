import { Component } from '@angular/core';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Component({
  selector: 'app-session-form-marketing',
  templateUrl: './session-form-marketing.component.html',
  styleUrls: ['./session-form-marketing.component.scss'],
})
export class SessionFormMarketingComponent extends DynaFormBaseComponent {
  readonly relatedSessionsArray = new FormArray([]);
  readonly sfiValidators = [
    Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
  ];

  constructor() {
    super();
    this.addFormControls([
      ['promo', new FormControl(null)],
      ['relatedSessions', new FormArray([new FormControl(null)])],
    ]);
  }

  sessionsArrayValues() {
    return this.relatedSessionsArray.controls.map(({ value }) => value);
  }

  addFormControl(value: string) {
    this.relatedSessionsArray.push(new FormControl(value));
  }

  removeControl(i: number) {
    this.relatedSessionsArray.removeAt(i);
  }
}
