import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { AppInjector } from './app-injector';
import { DynaFormService } from './services/dyna-form.service';

export type ControlTuple = [string, FormControl | FormArray];

interface AddControlsOptions {
  preserveOnDestroy: boolean;
}

@Component({ template: '' })
export abstract class DynaFormBaseComponent implements OnDestroy {
  #controls?: ControlTuple[];
  private dynaFormService: DynaFormService;
  addControlsOptions: AddControlsOptions;
  constructor() {
    const injector = AppInjector.getInjector();
    this.dynaFormService = injector.get(DynaFormService);
  }

  addControls(controls: ControlTuple[], options?: AddControlsOptions) {
    this.#controls = controls;
    controls.forEach(([name, control]) => {
      // add new control if is undefined or null
      this.dynaFormService.form.addControl(name, control);
      // console.log(this.form.value);
    });

    this.addControlsOptions = options;
  }

  private removeControls() {
    this.#controls.forEach(([name]) => {
      this.form.removeControl(name);
    });
  }

  get form() {
    return this.dynaFormService.form;
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }

  ngOnDestroy(): void {
    if (!this.addControlsOptions?.preserveOnDestroy) {
      this.removeControls();
    }
  }
}
