import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';

@Component({
  selector: 'app-goal-step',
  templateUrl: './goal-step.component.html',
  styleUrls: ['./goal-step.component.scss'],
})
export class GoalStepComponent {
  formGroup: FormGroup;
  goalsData = [
    { id: 1, goal: 'Joie Movement', isChecked: false },
    { id: 2, goal: 'Joie Emotions', isChecked: false },
    { id: 3, goal: 'Joie Connections', isChecked: false },
    { id: 4, goal: 'Joie Spirit', isChecked: true },
    { id: 5, goal: 'Joie Professional', isChecked: true },
  ];
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService
  ) {
    this.formGroup = this._formBuilder.group({
      goalsCtrl: new FormArray([]),
    });
    this.addCheckboxes();
  }

  get goalsFormArray() {
    return this.formGroup.controls.goalsCtrl as FormArray;
  }

  handleCheck({ goal, id, isChecked }) {
    this.goalsFormArray.controls[id - 1].patchValue({ [goal]: !isChecked });
  }

  private addCheckboxes() {
    this.goalsData.forEach(({ goal, isChecked }) =>
      this.goalsFormArray.push(new FormControl({ [goal]: isChecked }))
    );
  }
}
