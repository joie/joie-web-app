import {
  TEACHER_ONBOARDING,
  StorageServiceService,
} from './../../../shared/storage-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OnboardingService } from '../../../shared/onboarding.service';
import { lettersRegExPattern } from '../../../../models/regex';
import { TeacherOnboardingFormService } from '../../services/teacher-onboarding-form.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

export const PERSONAL = 'personal';
export const FIRST_NAME = 'firstName';
export const LAST_NAME = 'lastName';
export const EMAIL = 'email';
export const PHONE = 'phone';
@UntilDestroy()
@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
})
export class PersonalInfoStepComponent {
  form: FormGroup;
  controlKey = TEACHER_ONBOARDING + '-' + PERSONAL;

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
    private fb: FormBuilder,
    public onboardingService: OnboardingService,
    private formService: TeacherOnboardingFormService,
    private storage: StorageServiceService
  ) {
    this.form = this.fb.group({
      [FIRST_NAME]: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(lettersRegExPattern)],
      ],
      [LAST_NAME]: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(lettersRegExPattern)],
      ],
      [EMAIL]: ['', [Validators.required, Validators.email]],
      [PHONE]: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
    });

    this.initForm();
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
    this.storage
      .getItem(this.controlKey)
      .pipe(untilDestroyed(this))
      .subscribe((cacheValue) => {
        if (cacheValue) {
          this.form.patchValue(cacheValue);
        }
      });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this.formService.form.patchValue(value);
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }

  isValid() {
    return this.form.valid;
  }
}
