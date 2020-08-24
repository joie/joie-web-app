import { SessionFormExtenderComponent } from './../../common/session-form-extender/session-form-extender.component';
import { Component, OnInit } from '@angular/core';
import { SessionFormService } from '../../services/session-form.service';
import { FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-form-marketing',
  templateUrl: './session-form-marketing.component.html',
  styleUrls: ['./session-form-marketing.component.scss'],
})
export class SessionFormMarketingComponent extends SessionFormExtenderComponent {
  readonly relatedSessionsArray = new FormArray([]);
  readonly sfiValidators = [
    Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
  ];

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
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
