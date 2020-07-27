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
    { id: 1, sessionType: 'On-demand sessions', isChecked: false },
    { id: 2, sessionType: 'Live streaming sessions', isChecked: false },
    { id: 3, sessionType: '1:1 coaching sessions', isChecked: false },
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

  get sessionTypesArray() {
    return this.formGroup.controls.sessionTypesCtrl as FormArray;
  }

  handleCheck({ sessionType, id, isChecked }) {
    this.sessionTypesArray.controls[id - 1].patchValue({
      [sessionType]: !isChecked,
    });
  }

  private addCheckboxes() {
    this.sessionTypesData.forEach(({ sessionType, isChecked }) =>
      this.sessionTypesArray.push(new FormControl({ [sessionType]: isChecked }))
    );
  }
}
