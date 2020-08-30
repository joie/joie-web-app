import {
  Pillar,
  JoieMovement,
  JoieEmotions,
  JoieConnections,
  JoieProfessional,
  JoieSpirit,
} from '../../../../../sessions/models/session';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.scss'],
})
export class ActivitiesBoxComponent implements OnInit {
  @Input() pillar;
  public formGroup: FormGroup;
  afterViewInit = false;
  get keys() {
    return Object.keys(this.pillar);
  }

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
      activities: new FormArray([]),
    });
  }

  ngOnInit(): void {
    let student = history.state.student || null;
    if (student && student.activities) {
      this.addActivityChipsFromCache(student.activities);
    } else {
      this.addActivityChips();
    }
  }

  isValid() {
    return this.submit().length > 0;
  }

  submit() {
    const selectedActivityTitles = this.formGroup.value.activities
      .map((selected, i) => (selected ? this.activitiesEnum[this.activityKeys[i]] : null))
      .filter((v) => v !== null);
    return selectedActivityTitles;
  }

  handleSelect(index, activity, selected) {
    if (selected) {
      this.activitiesFormArray.controls[index].patchValue(activity);
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
