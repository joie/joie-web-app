import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent {
  formGroup: FormGroup;
  sessionTypesData = [
    { id: 1, sessionType: 'On-demand sessions' },
    { id: 2, sessionType: 'Live streaming sessions' },
    { id: 3, sessionType: '1:1 coaching sessions' },
  ];
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService
  ) {
    this.formGroup = this._formBuilder.group({
      sessionTypesCtrl: new FormArray([]),
    });
    this.addCheckboxes();
  }

  get goalsFormArray() {
    return this.formGroup.controls.sessionTypesCtrl as FormArray;
  }

  private addCheckboxes() {
    this.sessionTypesData.forEach(() =>
      this.goalsFormArray.push(new FormControl(false))
    );
  }

  getCheckboxListValue() {
    return this.formGroup.value.sessionTypesCtrl
      .map((checked, i) => (checked ? this.sessionTypesData[i].id : null))
      .filter((v) => v !== null);
  }
}
