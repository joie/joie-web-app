import { Component } from '@angular/core';
import { FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Activities, Pillar, CourseLevel, Currency, Format } from '../../../../../../../libs/schemes/src';

const FORMAT = 'format';
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
  ACTIVITIES = 'activities';
  GOALS = 'goals';
  COMMENTS = 'comments';
  PRICE = 'price';
  LIMIT = 'limit';
  PRICE_CURRENCY = 'currency';
  PRICE_DISPLAY = 'display';

  readonly goalsFormArray = new FormArray([]);
  readonly commentsFormArray = new FormArray([]);

  readonly sfiValidators = [Validators.minLength(5)];

  constructor() {
    super();

    this.addControls([
      [this.PILLAR, new FormControl(null)],
      [this.LEVEL, new FormControl(null)],
      [this.GOALS, this.goalsFormArray],
      [this.COMMENTS, this.commentsFormArray],
      [this.ACTIVITIES, new FormControl(null)],
      [this.LIMIT, new FormControl(null)],
      [
        this.PRICE,
        new FormGroup({
          [this.PRICE_CURRENCY]: new FormControl(Currency.USD), // ! readonly value
          [this.PRICE_DISPLAY]: new FormControl(null),
        }),
      ],
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
    return this.getFormControl(FORMAT).value === Format.LiveStreaming;
  }

  formArrayValues(array: string) {
    return this[`${array}FormArray`].controls.map(({ value }) => value);
  }

  removeControl(formArray: FormArray, i: number) {
    formArray.removeAt(i);
  }

  addGoalOrComment(formArray: FormArray, value: string) {
    if (!value) {
      return;
    }
    formArray.push(new FormControl(value));
  }
}
