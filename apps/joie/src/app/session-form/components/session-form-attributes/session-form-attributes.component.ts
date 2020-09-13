import { Component } from '@angular/core';
import { Pillar, CourseLevel, Activities, SessionFormat } from '../../../sessions/models/session';
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

  UPPER_LIMIT = 20; // https://github.com/joie/joie-web-app/issues/18#issuecomment-671474074
  PILLAR = 'pillar';
  LEVEL = 'level';
  ACTIVITY = 'activity';
  GOALS = 'goals';
  COMMENTS = 'comments';
  PRICE = 'price';
  LIMIT = 'limit';

  readonly goalsFormArray = new FormArray([]);
  readonly commentsFormArray = new FormArray([]);

  readonly sfiValidators = [Validators.minLength(5)];

  constructor() {
    super();
    this.addControls([
      [this.PILLAR, new FormControl(null)],
      [this.LEVEL, new FormControl(null)],
      [this.ACTIVITY, new FormControl(null)],
      [this.GOALS, this.goalsFormArray],
      [this.COMMENTS, this.commentsFormArray],
      [this.PRICE, new FormControl(null)],
      [this.LIMIT, new FormControl(null)],
    ]);

    this.getFormControl(this.LIMIT).setValidators([Validators.max(this.UPPER_LIMIT)]);
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

  get isLivestreaming() {
    return this.getFormControl('format').value === SessionFormat.LiveStreaming;
  }

  formArrayValues(array: string) {
    return this[`${array}FormArray`].controls.map(({ value }) => value);
  }

  removeControl(formArray: FormArray, i: number) {
    formArray.removeAt(i);
  }

  addGoalOrComment(formArray: FormArray, value: string) {
    formArray.push(new FormControl(value));
  }
}
