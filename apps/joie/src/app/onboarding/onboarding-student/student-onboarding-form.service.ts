import { StorageServiceService } from './../shared/storage-service.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlTuple } from '../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingFormService {
  form?: FormGroup;

  constructor(private fb: FormBuilder, private storageService: StorageServiceService) {
    this.form = this.fb.group({});
  }
  ngOnDestroy() {}

  setControl(control: ControlTuple) {
    console.log(control);
    this.form.setControl(control[0], control[1]);
  }

  removeControl(name) {
    this.form.removeControl(name);
  }
}
