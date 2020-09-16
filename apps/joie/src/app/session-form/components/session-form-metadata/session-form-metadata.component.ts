import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Type } from '../../../sessions/enums';
import { SessionTypeLiteralsMap } from '../../../sessions/literal-maps';

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
  sessionFormatLiteralMap = SessionTypeLiteralsMap;
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
    return this.form.get('type').value === Type.Coaching;
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
