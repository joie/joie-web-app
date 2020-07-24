import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { StudentOnbiardingService } from '../../service/student-onbiarding.service';

@Component({
  selector: 'app-goal-step',
  templateUrl: './goal-step.component.html',
  styleUrls: ['./goal-step.component.scss'],
})
export class GoalStepComponent {
  formGroup: FormGroup;
  goalsData = [
    { id: 1, goal: 'Joie Movement' },
    { id: 2, goal: 'Joie Emotions' },
    { id: 3, goal: 'Joie Connections' },
    { id: 4, goal: 'Joie Spirit' },
    { id: 5, goal: 'Joie Professional' },
  ];
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnbiardingService
  ) {
    this.formGroup = this._formBuilder.group({
      goalsCtrl: new FormArray([]),
    });
    this.addCheckboxes();
  }

  get goalsFormArray() {
    return this.formGroup.controls.goalsCtrl as FormArray;
  }

  private addCheckboxes() {
    this.goalsData.forEach(() =>
      this.goalsFormArray.push(new FormControl(false))
    );
  }

  getCheckboxListValue() {
    return this.formGroup.value.goalsCtrl
      .map((checked, i) => (checked ? this.goalsData[i].id : null))
      .filter((v) => v !== null);
  }
}
