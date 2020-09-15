import {
  TEACHER_ONBOARDING,
  StorageServiceService,
} from './../../../shared/storage-service.service';
import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { OnboardingService } from './../../../shared/onboarding.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

export const TEACHING_EXPERIENCE = 'teaching-experience';
export const EXPERIENCE = 'experience';
@UntilDestroy()
@Component({
  selector: 'app-teaching-experience-step',
  templateUrl: './teaching-experience-step.component.html',
  styleUrls: ['./teaching-experience-step.component.scss'],
})
export class TeachingExperienceStepComponent {
  form: FormGroup;
  controlKey = TEACHER_ONBOARDING + '-' + TEACHING_EXPERIENCE;

  get experienceControl() {
    return this.form.get(EXPERIENCE);
  }

  constructor(
    public authService: AuthService,
    private _formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public onboardingService: OnboardingService,
    private formService: TeacherOnboardingFormService,
    private storage: StorageServiceService
  ) {
    this.form = this._formBuilder.group({
      [EXPERIENCE]: [
        '',
        [Validators.required, Validators.minLength(50), Validators.maxLength(300)],
      ],
    });

    this.initForm();
  }

  initForm() {
    this.formService.setControl([EXPERIENCE, new FormControl()]);

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
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }

  isValid() {
    return this.form.valid;
  }
}
