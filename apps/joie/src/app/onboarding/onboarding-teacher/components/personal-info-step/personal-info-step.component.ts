import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { OnboardingService } from '../../../shared/onboarding.service';
import { lettersRegExPattern, numbersRegExPattern } from '../../../../models/regex';

export const FIRST_NAME = 'firstName';
export const LAST_NAME = 'lastName';
export const EMAIL = 'email';
export const PHONE = 'phone';

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
      firstName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(lettersRegExPattern)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern(lettersRegExPattern)],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
          Validators.pattern(numbersRegExPattern),
        ],
      ],
    });
  }
  ngOnInit(): void {
    let teacher = history.state.teacher || null;
    if (teacher && 'firstName' in teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.patchValue(teacher);
  }
}
