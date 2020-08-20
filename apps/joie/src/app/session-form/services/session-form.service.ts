import { Injectable } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

export type ControlTuple = [string, FormControl | FormArray];

@Injectable()
export class SessionFormService {
  sessionForm = this.fb.group({
    title: ['lorem ipsum', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  getControl(name: string) {
    return this.sessionForm.get(name)?.value;
  }

  addControls(controls: ControlTuple[]) {
    controls.forEach(([name, control]) => {
      this.sessionForm.get(name) ?? this.sessionForm.addControl(name, control);
    });
    console.log(this.sessionForm.value);
  }

  removeControls(controls: ControlTuple[]) {
    controls.forEach(([name]) => {
      this.sessionForm.removeControl(name);
    });
  }
}
