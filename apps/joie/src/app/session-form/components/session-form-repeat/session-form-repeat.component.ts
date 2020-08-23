import { Repeat } from './../../../sessions/models/session';
import { SessionFormService } from './../../services/session-form.service';
import { SessionFormExtenderComponent } from './../../common/session-form-extender/session-form-extender.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-session-form-repeat',
  templateUrl: './session-form-repeat.component.html',
  styleUrls: ['./session-form-repeat.component.scss'],
})
export class SessionFormRepeatComponent extends SessionFormExtenderComponent {
  repeatEnum = Repeat;
  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [
      ['repeat', new FormControl(null)],
      ['numberOfSessions', new FormControl(null)],
    ];
  }

  get repeatKeys() {
    return Object.keys(this.repeatEnum);
  }
}
