import { SessionFormExtenderComponent } from './../../common/session-form-extender/session-form-extender.component';
import { Component, OnInit } from '@angular/core';
import { SessionFormService } from '../../services/session-form.service';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-session-form-marketing',
  templateUrl: './session-form-marketing.component.html',
  styleUrls: ['./session-form-marketing.component.scss'],
})
export class SessionFormMarketingComponent extends SessionFormExtenderComponent {
  readonly relatedSessions = new FormArray([new FormControl(null)]);

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.addFormControls([
      ['promo', new FormControl(null)],
      // ['relatedSessions', this.relatedSessions] // todo after formArrayComponent ready
    ]);
  }
}
