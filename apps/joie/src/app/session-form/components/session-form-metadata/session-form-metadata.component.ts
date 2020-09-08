import { SessionFormat } from './../../../sessions/models/session';
import { Component } from '@angular/core';
import { SessionType } from '../../../sessions/models/session';
import { FormControl, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

// @Dyna({
//   controls: [
//     ['format', new FormControl(null, Validators.required)],
//     ['type', new FormControl(null, Validators.required)],
//     ['title', new FormControl(null, Validators.required)],
//     ['description', new FormControl(null)],
//   ],
// })
@Component({
  selector: 'app-session-form-metadata',
  templateUrl: './session-form-metadata.component.html',
  styleUrls: ['./session-form-metadata.component.scss'],
})
export class SessionFormMetadataComponent extends DynaFormBaseComponent {
  sessionTypeEnum = SessionType;
  sessionFormatEnum = SessionFormat;

  constructor() {
    super();

    this.addControls([
      ['format', new FormControl(null, Validators.required)],
      ['type', new FormControl(null, Validators.required)],
      ['title', new FormControl(null, Validators.required)],
      ['description', new FormControl(null)],
    ]);
  }

  get sessionTypeKeys(): Array<string> {
    return Object.keys(this.sessionTypeEnum);
  }

  get sessionFormatKeys(): Array<string> {
    return Object.keys(this.sessionFormatEnum);
  }
}

// function Dyna(config) {
//   return function (target) {
//     console.log(target);
//     Object.defineProperty(
//       target.prototype,
//       'addControls',
//       { value: () => config.course } // 2
//     );
//   };
// }
