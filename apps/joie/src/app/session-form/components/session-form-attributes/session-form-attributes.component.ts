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

  readonly goalsFormArray = new FormArray([new FormControl(null)]);
  readonly commentsFormArray = new FormArray([new FormControl(null)]);

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [
      ['pillar', new FormControl(null)],
      ['level', new FormControl(null)],
      ['activity', new FormControl(null)],
      ['goals', this.goalsFormArray],
      ['comments', this.commentsFormArray],
    ];
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

  addFormControll(formArray: FormArray) {
    formArray.push(new FormControl(null));
  }

  removeControl(formArray: FormArray, i: number) {
    formArray.removeAt(i);
  }
}
