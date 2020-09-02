import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { OnboardingService } from '../../../shared/onboarding.service';

export const FIRST_NAME = 'firstNameCtrl';
export const LAST_NAME = 'lastNameCtrl';
export const EMAIL = 'emailCtrl';
export const PHONE = 'phoneNumberCtrl';

@Component({
  selector: 'app-personal-info-step',
  templateUrl: './personal-info-step.component.html',
  styleUrls: ['./personal-info-step.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class PersonalInfoStepComponent implements OnInit {
  formGroup: FormGroup;

  get firstName() {
    return this.formGroup.get(FIRST_NAME);
  }
  get lastName() {
    return this.formGroup.get(LAST_NAME);
  }
  get email() {
    return this.formGroup.get(EMAIL);
  }
  get phone() {
    return this.formGroup.get(PHONE);
  }
  constructor(private _formBuilder: FormBuilder, public onboardingService: OnboardingService) {
    this.formGroup = this._formBuilder.group({
      firstNameCtrl: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
      ],
      lastNameCtrl: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
      ],
      emailCtrl: ['', [Validators.required, Validators.email]],
      phoneNumberCtrl: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }
  ngOnInit(): void {
    let teacher = history.state.teacher || null;
    if (teacher && 'firstNameCtrl' in teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.patchValue(teacher);
  }
}
