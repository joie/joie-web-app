import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { OnboardingService } from './../../../shared/onboarding.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherOnboardingApiService } from '../../services/teacher-onboarding-api.service';

export const ADDED_VALUE = 'addedValue';
@Component({
  selector: 'app-why-joie-step',
  templateUrl: './why-joie-step.component.html',
  styleUrls: ['./why-joie-step.component.scss'],
})
export class WhyJoieStepComponent implements OnInit {
  formGroup: FormGroup;
  afterSubmit = false;

  get addedValue() {
    return this.formGroup.get(ADDED_VALUE);
  }

  constructor(
    public authService: AuthService,
    private _formBuilder: FormBuilder,
    public onboardingService: OnboardingService,
    private apiService: TeacherOnboardingApiService
  ) {
    this.formGroup = this._formBuilder.group({
      addedValue: ['', [Validators.required, Validators.minLength(50)]],
    });
  }

  submitFormsData(): void {
    this.afterSubmit = true;
    this.apiService.submitTeacherAccountData(
      Object.assign(history.state.teacher, this.formGroup.value)
    );
  }

  ngOnInit() {
    let teacher = history.state.teacher;
    if ('addedValue' in teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['addedValue'].setValue(teacher.addedValue);
  }
}
