import { Pillar } from './../../../../sessions/models/session';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-step',
  templateUrl: './goal-step.component.html',
  styleUrls: ['./goal-step.component.scss'],
})
export class GoalStepComponent {
  formGroup: FormGroup;
  pillarEnum = Pillar;

  get pillarKeys() {
    return Object.keys(Pillar);
  }

  get pillarFormArray() {
    return this.formGroup.controls.pillars as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService,
    private router: Router
  ) {
    this.formGroup = this._formBuilder.group({
      pillars: new FormArray([]), // todo validator
    });
    this.addPillarCheckboxes();
  }

  private addPillarCheckboxes() {
    this.pillarKeys.forEach(() => this.pillarFormArray.push(new FormControl(false)));
    console.log(this.pillarFormArray);
  }

  submit() {
    const selectedPillarTitles = this.formGroup.value.pillars
      .map((checked, i) => (checked ? this.pillarEnum[this.pillarKeys[i]] : null))
      .filter((v) => v !== null);

    console.log(selectedPillarTitles);
    return { pillars: selectedPillarTitles };
  }
}
