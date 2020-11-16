import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Type, Format } from '../../../../../../../libs/schemes/src';
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
  isCoachingType$: Observable<boolean>;
  FORMAT = 'format';
  TYPE = 'type';
  TITLE = 'title';
  DESCRIPTION = 'description';
  IMAGE = IMAGE;

  constructor() {
    super();
    this.addControls([
      [this.FORMAT, new FormControl(null, Validators.required)],
      [this.TYPE, new FormControl(null, Validators.required)],
      [this.TITLE, new FormControl(null, Validators.required)],
      [this.DESCRIPTION, new FormControl(null)],
      [this.IMAGE, new FormControl({ value: null, disabled: true })],
    ]);

    this.isCoachingType$ = this.form.get(this.TYPE).valueChanges.pipe(
      map((type) => type === Type.Coaching),
      tap((isCoaching) => isCoaching && this.form.get(this.FORMAT).setValue(Format.LiveStreaming)),
      shareReplay(1),
    );
  }

  // get coachingSelected() {
  //   return this.form.get('type').value === Type.Coaching;
  // }

  asIsOrder(a, b) {
    return 1;
  }

  onImageSelected(file: File) {
    this.getFormControl(this.IMAGE).setValue(file);
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
