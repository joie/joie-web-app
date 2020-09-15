import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  SessionFormatLiteralsMap,
  SessionType,
  SessionTypeLiteralsMap,
} from '../../../sessions/models';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';

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
  sessionTypeLiteralMap = SessionTypeLiteralsMap;
  sessionFormatLiteralMap = SessionFormatLiteralsMap;
  typeSelectedValue: string;

  constructor() {
    super();

    this.addControls([
      ['format', new FormControl(null, Validators.required)],
      ['type', new FormControl(null, Validators.required)],
      ['title', new FormControl(null, Validators.required)],
      ['description', new FormControl(null)],
    ]);
  }

  get coachingSelected() {
    return this.form.get('type').value === SessionType.Coaching;
  }

  asIsOrder(a, b) {
    return 1;
  }
  // get sessionTypeKeys(): Array<string> {
  //   return this.sessionTypeMap.keys();
  // }

  // get sessionFormatKeys(): Array<string> {
  //   return Object.keys(this.sessionFormatEnum);
  // }
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
