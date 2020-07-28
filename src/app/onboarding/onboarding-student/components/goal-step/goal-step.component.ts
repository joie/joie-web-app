import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../validators/atLeastOnIsChecked';

@Component({
  selector: 'app-goal-step',
  templateUrl: './goal-step.component.html',
  styleUrls: ['./goal-step.component.scss'],
})
export class GoalStepComponent implements OnInit {
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
  ngOnInit(): void {
    // this.formGroup = this._formBuilder.group({
    //   goalsCtrl: new FormArray([], atLeastOneIsCheckedValidator()),
    // });
    // this.addCheckboxes();
    // UPD: the sad fact is that  having this logic onInit lets the stepper to take this form group before it's populated with values and validators (and yet is valid)
    // on the other hand moving this logic to constructor sometimes causes step activation before the step is opened, the stepper starts keeping track of this formGroup which is invalid and blocks the real curr step
  }

  get goalsFormArray() {
    // todo research why this fires 5 times every time
    // ok now they're also deselectable :) but form validation doesnt work, check this out
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
