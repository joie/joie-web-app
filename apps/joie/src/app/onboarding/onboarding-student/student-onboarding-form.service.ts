import { StorageServiceService } from './../shared/storage-service.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ControlTuple } from '../../../../../../libs/dyna-form';
import { SESSION_TYPES } from './components/session-types-step/session-types-step.component';
import { PILLARS } from '../../pillar-list/pillar-list.component';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingFormService {
  form?: FormGroup;

  get sessionTypesFormArray() {
    return this.form.get(SESSION_TYPES) as FormArray;
  }

  getActivityFormArray(pillar): FormArray {
    return this.form.get(PILLARS).get(pillar) as FormArray;
  }

  constructor(private fb: FormBuilder, private storageService: StorageServiceService) {
    this.form = this.fb.group({});
  }

  setControl(control: ControlTuple) {
    this.form.setControl(control[0], control[1]);
  }
  removeControl(name) {
    this.form.removeControl(name);
  }
}
