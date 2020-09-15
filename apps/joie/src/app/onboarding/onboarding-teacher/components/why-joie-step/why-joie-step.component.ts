import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { OnboardingService } from './../../../shared/onboarding.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TeacherOnboardingApiService } from '../../services/teacher-onboarding-api.service';
import { Subscription } from 'rxjs';
import { TEACHER_ONBOARDING, StorageServiceService } from '../../../shared/storage-service.service';
import { TeacherOnboardingFormService } from '../../services/teacher-onboarding-form.service';
import { UntilDestroy } from '@ngneat/until-destroy';

export const WHY_JOIE = 'why-joie';
export const ADDED_VALUE = 'addedValue';
@UntilDestroy()
@Component({
  selector: 'app-why-joie-step',
  templateUrl: './why-joie-step.component.html',
  styleUrls: ['./why-joie-step.component.scss'],
})
export class WhyJoieStepComponent {
  form: FormGroup;
  afterSubmit = false;
  formValueChanges$: Subscription;
  controlKey = TEACHER_ONBOARDING + '-' + WHY_JOIE;

  get addedValue() {
    return this.form.get(ADDED_VALUE);
  }

  constructor(
    public authService: AuthService,
    private _formBuilder: FormBuilder,
    public onboardingService: OnboardingService,
    private apiService: TeacherOnboardingApiService,
    private formService: TeacherOnboardingFormService,
    private storage: StorageServiceService
  ) {
    this.form = this._formBuilder.group({
      addedValue: ['', [Validators.required, Validators.minLength(50)]],
    });

    this.initForm();
  }

  initForm() {
    this.formService.setControl([ADDED_VALUE, new FormControl()]);
    this.getCache();
    this.subscribeToValueChanges();
  }

  getCache() {
    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue(cacheValue);
      }
    });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.subscribe((value) => {
      this.formService.form.patchValue(value);
      if (this.form.valid) {
        // not caching invalid value
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }
  isValid() {
    return this.afterSubmit ? false : this.form.valid;
  }

  submitFormsData(): void {
    this.afterSubmit = true;
    console.log(this.formService.form.value);
    // this.apiService.submitTeacherAccountData(this.formService.form.value);
  }
}
