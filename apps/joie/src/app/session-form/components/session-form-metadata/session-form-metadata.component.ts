import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Type } from '../../../sessions/enums';
import { SessionFormatLiteralsMap, SessionTypeLiteralsMap } from '../../../sessions/literal-maps';

export const IMAGE = 'image';
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
      [
        'format',
        new FormControl(this.session ? this.session['format'] : null, Validators.required),
      ],
      ['type', new FormControl(this.session ? this.session['type'] : null, Validators.required)],
      ['title', new FormControl(this.session ? this.session['title'] : null, Validators.required)],
      ['description', new FormControl()],
      [IMAGE, new FormControl({ value: null, disabled: true })],
    ]);
  }

  get coachingSelected() {
    return this.form.get('type').value === Type.Coaching;
  }

  asIsOrder(a, b) {
    return 1;
  }

  onImageSelected(file: File) {
    this.getFormControl(IMAGE).setValue(file);
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
