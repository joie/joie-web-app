import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AppInjector } from './app-injector';
import { DynaFormService } from './services/dyna-form.service';

export type ControlTuple = [string, FormControl | FormArray];

@Component({
  template: '',
})
export class DynaFormBaseComponent implements OnDestroy {
  protected dynaFormService: DynaFormService;
  #controls: ControlTuple[] = [];

  constructor() {
    const injector = AppInjector.getInjector();
    this.dynaFormService = injector.get(DynaFormService);
  }

  protected addFormControls(controls: ControlTuple[]) {
    this.addControls(controls);
    this.#controls = controls;
  }

  get form(): FormGroup {
    return this.dynaFormService.form;
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }

  addControls(controls: ControlTuple[]) {
    controls.forEach(([name, control]) => {
      // add new control if is undefined or null
      this.form.get(name) ?? this.form.addControl(name, control);
    });
  }

  removeControls(controls: ControlTuple[]) {
    controls.forEach(([name]) => {
      this.form.removeControl(name);
    });
  }

  ngOnDestroy(): void {
    this.removeControls(this.#controls);
  }
}
