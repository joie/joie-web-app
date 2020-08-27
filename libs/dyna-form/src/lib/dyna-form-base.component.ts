import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppInjector } from './app-injector';
import { NgFormsManager } from '@ngneat/forms-manager';
import { map } from 'rxjs/operators';
import { DynaFormService } from './services/dyna-form.service';

export type ControlTuple = [string, FormControl | FormArray];

@Component({
  template: '',
})
export class DynaFormBaseComponent implements OnDestroy {
  #controls: ControlTuple[];

  private dynaFormService: DynaFormService;
  // private builder: FormBuilder;
  // private formsManager: NgFormsManager;

  constructor() {
    const injector = AppInjector.getInjector();
    this.dynaFormService = injector.get(DynaFormService);
    // this.builder = injector.get(FormBuilder);
    // this.formsManager = injector.get(NgFormsManager);

    // this.form = this.builder.group({ name: ['yinon'] });
    // this.form.addControl('workplace', new FormControl('vonage'));

    // const skills = new FormArray([]);

    // /** Or inside a FormGroup */
    // const config = new FormGroup({
    //   skills: new FormArray([]),
    // });
    // this.formsManager
    //   .upsert('skills', skills, { arrControlFactory: (value) => new FormControl(value) })
    //   .upsert('config', config, {
    //     arrControlFactory: { skills: (value) => new FormControl(value) },
    //   });
    // this.formsManager.upsert('onboarding', this.form, { persistState: true });
    // this.formsManager
    //   .valueChanges('onboarding')
    //   // .pipe(map(() => this.form.value))
    //   .subscribe(console.log);
  }

  set controls(controls: ControlTuple[]) {
    this.#controls = controls;
    controls.forEach(([name, control]) => {
      // add new control if is undefined or null
      this.dynaFormService.form.addControl(name, control);
      console.log(this.form.value);
    });
  }

  get form() {
    return this.dynaFormService.form;
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }

  ngOnDestroy(): void {
    this.#controls.forEach(([name]) => {
      this.form.removeControl(name);
    });
  }
}
