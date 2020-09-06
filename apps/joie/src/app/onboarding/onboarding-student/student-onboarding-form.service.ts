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

  addControls(controls: ControlTuple[]) {
    this.#controls = controls;
    controls.forEach(([name, control]) => {
      // add new control if is undefined or null
      this.form.addControl(name, control);
      // console.log(this.form.value);
    });
  }

  private removeControls() {
    this.#controls.forEach(([name]) => {
      this.form.removeControl(name);
    });
  }
}
