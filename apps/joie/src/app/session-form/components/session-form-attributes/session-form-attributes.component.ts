import { Component } from '@angular/core';
import { Pillar } from '../../../sessions/models/session';
import { FormControl } from '@angular/forms';
import { SessionFormService } from '../../services/session-form.service';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';

@Component({
  selector: 'app-session-form-attributes',
  templateUrl: './session-form-attributes.component.html',
  styleUrls: ['./session-form-attributes.component.scss'],
})
export class SessionFormAttributesComponent extends SessionFormExtenderComponent {
  pillarEnum = Pillar;

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [['pillar', new FormControl(null)]];
    // console.log(this.pillarEnum);
  }

  get pillarKeys(): Array<string> {
    return Object.keys(this.pillarEnum);
  }
}
