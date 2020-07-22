import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherOnboardingApiService } from '../../services/teacher-onboarding-api.service';

@Component({
  selector: 'app-why-joie-step',
  templateUrl: './why-joie-step.component.html',
  styleUrls: ['./why-joie-step.component.scss'],
})
export class WhyJoieStepComponent implements OnInit {
  teachersName;
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private apiService: TeacherOnboardingApiService
  ) {
    this.formGroup = this._formBuilder.group({
      addedValDescriptionCtrl: [
        '',
        [Validators.required, Validators.minLength(100)],
      ],
    });
  }

  submitFormsData(): void {
    console.log(
      'submitting',
      Object.assign(history.state.teacherData, this.formGroup.value)
    );
    this.apiService.submitTeacherAccountData(
      Object.assign(history.state.teacherData, this.formGroup.value)
    );
  }

  ngOnInit() {
    this.teachersName = history.state.teacherData.firstNameCtrl;
  }
}
