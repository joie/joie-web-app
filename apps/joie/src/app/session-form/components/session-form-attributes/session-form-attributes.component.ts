import { Component } from '@angular/core';
import { Pillar, CourseLevel, Activities } from '../../../sessions/models/session';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
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

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [
      ['pillar', new FormControl(null)],
      ['level', new FormControl(null)],
      ['activity', new FormControl(null)],
      ['goals', new FormArray([new FormControl(null)])],
      ['comments', new FormArray([new FormControl(null)])],
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

  get goalsFormArray() {
    return this.controls.filter((control) => control[0] === 'goals')[0][1] as FormArray;
  }

  get commentsFormArray() {
    return this.controls.filter((control) => control[0] === 'comments')[0][1] as FormArray;
  }

  addFormControll(formArray: FormArray) {
    formArray.push(new FormControl(null));
  }

  removeControl(formArray: FormArray, i: number) {
    formArray.removeAt(i);
  }
}
