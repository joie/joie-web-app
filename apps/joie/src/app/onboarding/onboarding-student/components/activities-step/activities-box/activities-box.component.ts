import {
  Pillar,
  JoieMovement,
  JoieEmotions,
  JoieConnections,
  JoieProfessional,
  JoieSpirit,
} from '../../../../../sessions/models/session';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';

@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.scss'],
})
export class ActivitiesBoxComponent implements OnInit {
  @Input() pillar;
  public formGroup: FormGroup;

  get activitiesEnum() {
    switch (this.pillar) {
      case Pillar.movement:
        return JoieMovement;
      case Pillar.emotions:
        return JoieEmotions;
      case Pillar.connections:
        return JoieConnections;
      case Pillar.professional:
        return JoieProfessional;
      case Pillar.spirit:
        return JoieSpirit;
    }
  }
  get activityKeys() {
    return Object.keys(this.activitiesEnum);
  }

  get activitiesFormArray() {
    return this.formGroup.controls.activities as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      activities: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });
  }

  ngOnInit(): void {
    this.fillFormArray();
  }

  fillFormArray() {
    let student = history.state.student || null;
    if (student && student.activities) {
      this.formGroup.controls['activities'].markAsTouched();

      this.addActivityChipsFromCache(student.activities);
    } else {
      this.addActivityChips();
    }
  }

  submit() {
    const selectedActivityTitles = this.formGroup.value.activities
      .map((selected, i) => (selected ? this.activitiesEnum[this.activityKeys[i]] : null))
      .filter((v) => v !== null);
    return selectedActivityTitles;
  }

  handleSelect(index, selected) {
    if (selected) {
      this.activitiesFormArray.controls[index].patchValue(true);
    } else {
      this.activitiesFormArray.controls[index].patchValue(false);
    }
  }

  private addActivityChips() {
    this.activityKeys.forEach(() => this.activitiesFormArray.push(new FormControl(false)));
  }

  private addActivityChipsFromCache(activities) {
    this.activityKeys.forEach((key) => {
      if (activities.includes(this.activitiesEnum[key])) {
        this.activitiesFormArray.push(new FormControl(true));
      } else {
        this.activitiesFormArray.push(new FormControl(false));
      }
    });
  }
}
