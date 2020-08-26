import { Component } from '@angular/core';
import { Pillar, CourseLevel, Activities } from '../../../sessions/models/session';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Component({
  selector: 'app-session-form-attributes',
  templateUrl: './session-form-attributes.component.html',
  styleUrls: ['./session-form-attributes.component.scss'],
})
export class SessionFormAttributesComponent extends DynaFormBaseComponent {
  pillarEnum = Pillar;
  levelEnum = CourseLevel;
  activityEnum = Activities;

  PILLAR = 'pillar';
  LEVEL = 'level';
  ACTIVITY = 'activity';
  GOALS = 'goals';
  COMMENTS = 'comments';
  PRICE = 'price';

  readonly goalsFormArray = new FormArray([]);
  readonly commentsFormArray = new FormArray([]);

  readonly sfiValidators = [Validators.minLength(5)];

  constructor() {
    super();
    this.addFormControls([
      [this.PILLAR, new FormControl(null)],
      [this.LEVEL, new FormControl(null)],
      [this.ACTIVITY, new FormControl(null)],
      [this.GOALS, new FormArray([new FormControl(null)])],
      [this.COMMENTS, new FormArray([new FormControl(null)])],
      [this.PRICE, new FormControl(null)],
    ]);
  }

  get pillarKeys(): Array<string> {
    return Object.keys(this.pillarEnum);
  }

  get levelKeys(): Array<string> {
    return Object.keys(this.levelEnum);
  }

  get activityKeys(): Array<string> {
    return Object.keys(this.activityEnum);
  }

  formArrayValues(array: string) {
    return this[`${array}FormArray`].controls.map(({ value }) => value);
  }

  addFormControl(formArray: FormArray, value: string) {
    formArray.push(new FormControl(value));
  }

  removeControl(formArray: FormArray, i: number) {
    formArray.removeAt(i);
  }
}
