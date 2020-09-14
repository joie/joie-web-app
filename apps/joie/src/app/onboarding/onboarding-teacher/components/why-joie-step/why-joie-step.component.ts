import { OnboardingService } from './../../../shared/onboarding.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherOnboardingApiService } from '../../services/teacher-onboarding-api.service';

export const ADDED_VALUE = 'addedValDescriptionCtrl';
@Component({
  selector: 'app-why-joie-step',
  templateUrl: './why-joie-step.component.html',
  styleUrls: ['./why-joie-step.component.scss'],
})
export class WhyJoieStepComponent implements OnInit {
  teachersName;
  formGroup: FormGroup;
  afterSubmit = false;

  get addedValue() {
    return this.formGroup.get(ADDED_VALUE);
  }

  constructor(
    private fb: FormBuilder,
    public onboardingService: OnboardingService,
    private apiService: TeacherOnboardingApiService
  ) {
    this.formGroup = this.fb.group({
      addedValDescriptionCtrl: ['', [Validators.required, Validators.minLength(50)]],
    });
  }

  submitFormsData(): void {
    this.afterSubmit = true;
    this.apiService.submitTeacherAccountData(
      Object.assign(history.state.teacher, this.formGroup.value)
    );
  }

  ngOnInit() {
    const teacher = history.state.teacher;
    this.teachersName = teacher.firstNameCtrl;
    if ('addedValDescriptionCtrl' in teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['addedValDescriptionCtrl'].setValue(teacher.addedValDescriptionCtrl);
  }
}
