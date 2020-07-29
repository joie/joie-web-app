import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../validators/atLeastOnIsChecked';
import { Router, RouterState } from '@angular/router';
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
  cachedFormData;
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService,
    private router: Router
  ) {
    this.formGroup = this._formBuilder.group({
      goalsCtrl: new FormArray([], atLeastOneIsCheckedValidator()),
    });
  }

  ngOnInit(): void {
    let studentData = history.state.studentData || null;
    if (studentData && 'goalsCtrl' in studentData) {
      this.addCheckboxesFromCache(studentData.goalsCtrl);
    } else {
      this.addCheckboxes();
    }
  }

  get goalsFormArray() {
    return this.formGroup.controls.goalsCtrl as FormArray;
  }

  entry(obj) {
    return Object.entries(obj)[0];
  }
  handleCheck(goal, isChecked, index) {
    this.goalsFormArray.controls[index].patchValue({ [goal]: !isChecked });
  }

  private addCheckboxesFromCache(goals) {
    goals.forEach((goal) => {
      let entries = this.entry(goal);
      this.goalsFormArray.push(new FormControl({ [entries[0]]: entries[1] }));
    });
  }

  private addCheckboxes() {
    this.goalsData.forEach(({ goal, isChecked }) =>
      this.goalsFormArray.push(new FormControl({ [goal]: isChecked }))
    );
  }
}
