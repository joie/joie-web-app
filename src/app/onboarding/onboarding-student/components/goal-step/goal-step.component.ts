import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../validators/atLeastOnIsChecked';

@Component({
  selector: 'app-goal-step',
  templateUrl: './goal-step.component.html',
  styleUrls: ['./goal-step.component.scss'],
})
export class GoalStepComponent {
  formGroup: FormGroup;
  goalsData = [
    { goal: 'Joie Movement', isChecked: false },
    { goal: 'Joie Emotions', isChecked: false },
    { goal: 'Joie Connections', isChecked: false },
    { goal: 'Joie Spirit', isChecked: false },
    { goal: 'Joie Professional', isChecked: false },
  ];
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService
  ) {
    this.formGroup = this._formBuilder.group({
      goalsCtrl: new FormArray([], atLeastOneIsCheckedValidator()),
    });
    this.addCheckboxes();
  }

  get goalsFormArray() {
    // todo research why this fires 5 times every time
    return this.formGroup.controls.goalsCtrl as FormArray;
  }

  entry(obj) {
    return Object.entries(obj)[0];
  }
  handleCheck(goal, isChecked, index) {
    this.goalsFormArray.controls[index].patchValue({ [goal]: !isChecked });
  }

  private addCheckboxes() {
    this.goalsData.forEach(({ goal, isChecked }) =>
      this.goalsFormArray.push(new FormControl({ [goal]: isChecked }))
    );
  }
}
