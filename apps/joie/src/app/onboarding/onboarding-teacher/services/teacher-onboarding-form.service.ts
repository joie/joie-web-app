import { GROUPS } from './../components/session-focus-area-step/session-focus-area-step.component';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ControlTuple } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Injectable({
  providedIn: 'root',
})
export class TeacherOnboardingFormService {
  form?: FormGroup;

  get ageGroupsFormArray() {
    return this.form.get(GROUPS) as FormArray;
  }
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }
  ngOnDestroy() {}

  setControl(control: ControlTuple) {
    this.form.setControl(control[0], control[1]);
  }

  setControls(controls: ControlTuple[]) {
    controls.forEach((control) => {
      this.setControl(control);
    });
  }
  removeControl(name) {
    this.form.removeControl(name);
  }
}
