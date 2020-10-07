import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AppInjector } from './app-injector';
import { DynaFormService } from './services/dyna-form.service';

export type ControlTuple = [string, FormControl | FormArray | FormGroup];

@Component({ template: '' })
export abstract class DynaFormBaseComponent implements OnDestroy {
  #controls?: ControlTuple[];
  dynaFormService: DynaFormService;

  constructor() {
    const injector = AppInjector.getInjector();
    this.dynaFormService = injector.get(DynaFormService);
  }

  storeFormValueRef(valueRef: any) {
    this.dynaFormService.valueRef = valueRef;
  }

  addControls(controls: ControlTuple[]) {
    this.#controls = controls;
    this.#controls.forEach(([name, control]) => {
      console.log(name, this.dynaFormService.valueRef[name]);
      // add new control if is undefined or null
      const value = this.dynaFormService.valueRef[name];
      control.setValue(value);
      this.form?.addControl(name, control);
      // this.form?.get(name) ?? this.form?.addControl(name, control);
      // console.log(this.form.value);
    });
  }

  private removeControls() {
    this.#controls?.forEach(([name]) => {
      this.form?.removeControl(name);
    });
  }

  get form() {
    return this.dynaFormService.form;
  }

  get session() {
    return this.dynaFormService.session;
  }

  getFormControl(name: string) {
    return this.form?.get(name);
  }

  ngOnDestroy(): void {
    this.removeControls();
  }
}
