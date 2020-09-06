import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlTuple } from '../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingFormService {
  form?: FormGroup;
  #controls?: ControlTuple[];

  constructor(private fb: FormBuilder) {
    console.log('service constructed');
    this.form = this.fb.group({});
  }
  ngOnDestroy() {
    console.log('SERVICE DESTROYED');
  }

  addControl(control: ControlTuple) {
    console.log(control);
    this.form.setControl(control[0], control[1]);
    // this.#controls = controls;
  }

  removeControl(name) {
    this.form.removeControl(name);
  }
}
