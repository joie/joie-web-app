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

  removeFormValueRef() {
    this.dynaFormService.valueRef = undefined;
  }

  // TODO extract formArray condition to decorator
  addControls(controls: ControlTuple[]) {
    this.#controls = controls;
    this.#controls.forEach(([name, control]) => {
      if (this.dynaFormService.valueRef) {
        // add new control if is undefined or null
        let value = this.dynaFormService.valueRef[name];

        if (control instanceof FormGroup) {
          if (value) {
            control.setValue(value);
          }
        }

        if (control instanceof FormControl) {
          value ||= null;
          control.setValue(value);
        }

        if (control instanceof FormArray) {
          value ||= [];
          value.forEach((val: any) => {
            control.push(new FormControl(val));
          });
        }
      }

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

  getFormControl(name: string) {
    return this.form?.get(name);
  }

  ngOnDestroy(): void {
    this.removeControls();
  }
}
