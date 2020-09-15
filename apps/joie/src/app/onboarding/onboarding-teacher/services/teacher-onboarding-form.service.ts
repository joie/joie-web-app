import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ControlTuple } from '@joie/dyna-form';

@Injectable({
  providedIn: 'root',
})
export class TeacherOnboardingFormService {
  form?: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  setControl(control: ControlTuple) {
    this.form.setControl(control[0], control[1]);
  }
  removeControl(name) {
    this.form.removeControl(name);
  }
}
