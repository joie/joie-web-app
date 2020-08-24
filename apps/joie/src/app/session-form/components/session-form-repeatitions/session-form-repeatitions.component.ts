import { Repeat } from '../../../sessions/models/session';
import { SessionFormService } from '../../services/session-form.service';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-session-form-repeatitions',
  templateUrl: './session-form-repeatitions.component.html',
  styleUrls: ['./session-form-repeatitions.component.scss'],
})
export class SessionFormRepeatitionsComponent extends SessionFormExtenderComponent {
  repeatEnum = Repeat;
  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.addFormControls([
      ['repeat', new FormControl(null)],
      ['numberOfSessions', new FormControl(null)],
    ]);
  }

  get repeatKeys() {
    return Object.keys(this.repeatEnum);
  }
}
