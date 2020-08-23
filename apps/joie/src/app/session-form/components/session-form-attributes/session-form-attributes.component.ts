import { Component } from '@angular/core';
import { Pillar, CourseLevel, Activities } from '../../../sessions/models/session';
import { FormControl, FormArray } from '@angular/forms';
import { SessionFormService } from '../../services/session-form.service';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';

@Component({
  selector: 'app-session-form-attributes',
  templateUrl: './session-form-attributes.component.html',
  styleUrls: ['./session-form-attributes.component.scss'],
})
export class SessionFormAttributesComponent extends SessionFormExtenderComponent {
  pillarEnum = Pillar;
  levelEnum = CourseLevel;
  activityEnum = Activities;

  GOALS = 'goals';
  COMMENTS = 'comments';

  readonly goalsFormArray = new FormArray([]);
  readonly commentsFormArray = new FormArray([]);

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.addFormControls([
      ['pillar', new FormControl(null)],
      ['level', new FormControl(null)],
      ['activity', new FormControl(null)],
      [this.GOALS, new FormArray([new FormControl(null)])],
      [this.COMMENTS, new FormArray([new FormControl(null)])],
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
