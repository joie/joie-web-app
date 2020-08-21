import { Component } from '@angular/core';
import { SessionFormService } from '../../services/session-form.service';
import { SessionType } from '../../../sessions/models/session';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';

@Component({
  selector: 'app-session-form-metadata',
  templateUrl: './session-form-metadata.component.html',
  styleUrls: ['./session-form-metadata.component.scss'],
})
export class SessionFormMetadataComponent extends SessionFormExtenderComponent {
  sessionTypeEnum = SessionType;

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [
      ['type', new FormControl(null, Validators.required)],
      ['description', new FormControl(null)],
    ];
  }

  get sessionTypeKeys(): Array<string> {
    return Object.keys(this.sessionTypeEnum);
  }

  get form(): FormGroup {
    return this.sessionFormService.sessionForm;
  }
}
