import {
  StorageServiceService,
  TEACHER_ONBOARDING,
} from './../../../shared/storage-service.service';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OnboardingService } from '../../../shared/onboarding.service';
import { lettersRegExPattern } from '../../../../models/regex';
import { TeacherOnboardingFormService } from '../../services/teacher-onboarding-form.service';
import { Subscription } from 'rxjs';

export const PERSONAL = 'personal';
export const FIRST_NAME = 'firstName';
export const LAST_NAME = 'lastName';
export const EMAIL = 'email';
export const PHONE = 'phone';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
})
export class PersonalInfoStepComponent implements OnDestroy {
  form: FormGroup;
  controlKey = TEACHER_ONBOARDING + '-' + PERSONAL;
  formValueChanges$: Subscription;

  get firstName() {
    return this.form.get(FIRST_NAME);
  }
  get lastName() {
    return this.form.get(LAST_NAME);
  }
  get email() {
    return this.form.get(EMAIL);
  }
  get phone() {
    return this.form.get(PHONE);
  }
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: OnboardingService,
    private formService: TeacherOnboardingFormService,
    private storage: StorageServiceService
  ) {
    this.form = this._formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(lettersRegExPattern)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(lettersRegExPattern)],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
    });

    this.initForm();
  }
  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  initForm() {
    this.formService.setControls([
      [FIRST_NAME, new FormControl()],
      [LAST_NAME, new FormControl()],
      [EMAIL, new FormControl()],
      [PHONE, new FormControl()],
    ]);

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
    this.formValueChanges$ = this.form.valueChanges.subscribe((value) => {
      this.formService.form.patchValue(value);
      if (this.form.valid) {
        // not caching invalid value
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }

  isValid() {
    return this.form.valid;
  }
}
