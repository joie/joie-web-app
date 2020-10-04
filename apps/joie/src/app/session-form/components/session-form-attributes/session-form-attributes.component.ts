import { get } from 'lodash';
import { Format } from './../../../sessions/enums/format.enum';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { Activities, Pillar } from '../../../enums';
import { CourseLevel } from '../../../sessions/enums';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

const FORMAT = 'format';
@Component({
  selector: 'app-session-form-attributes',
  templateUrl: './session-form-attributes.component.html',
  styleUrls: ['./session-form-attributes.component.scss'],
})
export class SessionFormAttributesComponent extends DynaFormBaseComponent implements OnInit {
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
  PRICE_DISPLAY = 'display';

  readonly goalsFormArray = new FormArray([]);
  readonly commentsFormArray = new FormArray([]);

  readonly sfiValidators = [Validators.minLength(5)];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { session$: Observable<any> }
  ) {
    super();
    this.addControls([
      [this.PILLAR, new FormControl(null)],
      [this.LEVEL, new FormControl(null)],
      [this.ACTIVITY, new FormControl(null)],
      [this.GOALS, this.goalsFormArray],
      [this.COMMENTS, this.commentsFormArray],
      [this.LIMIT, new FormControl(null)],
      [
        this.PRICE,
        new FormGroup({
          currency: new FormControl('USD'),
          display: new FormControl(null),
        }),
      ],
    ]);

    this.getFormControl(this.LIMIT).setValidators([Validators.max(this.UPPER_LIMIT)]);
  }

  ngOnInit() {
    if (get(this.data, 'session$', false)) {
      // edit mode
      this.data.session$.subscribe(session => {
        if (session.goals.length > 0) {
          session.goals.map(goal => {
            this.addGoalOrComment(this.goalsFormArray, goal);
          });
        }

        if (session.comments.length > 0) {
          session.comments.map(goal => {
            this.addGoalOrComment(this.commentsFormArray, goal);
          });
        }
      });
    }
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
