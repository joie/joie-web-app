import { PILLARS } from './../../pillar-list/pillar-list.component';
import { StorageServiceService, USER_ONBOARDING } from './../shared/storage-service.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlTuple } from '../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingFormService {
  form?: FormGroup;
  #controls?: ControlTuple[];

  constructor(private fb: FormBuilder, private storageService: StorageServiceService) {
    console.log('service constructed');
    this.form = this.fb.group({});
    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    //   let key = USER_ONBOARDING + '-' + Object.keys(value)[0];
    //   this.storageService.setItemSubscribe(USER_ONBOARDING + '-' + key, value);
    // });
  }
  ngOnDestroy() {
    console.log('SERVICE DESTROYED');
  }

  setControl(control: ControlTuple) {
    console.log(control);
    this.form.setControl(control[0], control[1]);
    // this.#controls = controls;
  }

  removeControl(name) {
    this.form.removeControl(name);
  }
}
