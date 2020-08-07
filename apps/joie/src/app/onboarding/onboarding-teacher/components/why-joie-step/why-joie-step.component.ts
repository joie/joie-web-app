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
    if (this.formGroup) {
      this.apiService.submitTeacherAccountData(
        Object.assign(history.state.teacher, this.formGroup.value)
      );
    }
  }

  ngOnInit() {
    let teacher = history.state.teacher;
    this.teachersName = teacher.firstNameCtrl;
    if ('addedValDescriptionCtrl' in teacher) {
      this.initFormWithCachedData(teacher);
    }
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['addedValDescriptionCtrl'].setValue(
      teacher.addedValDescriptionCtrl
    );
  }
}
