import {
  Pillar,
  JoieMovement,
  JoieEmotions,
  JoieConnections,
  JoieProfessional,
  JoieSpirit,
} from './../../../../../sessions/models/session';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sub-goals-box',
  template: `<div class="box-with-badge">
    <h3>{{ pillar }}</h3>
    <form [formGroup]="formGroup">
      <mat-form-field>
        <mat-chip-list formArrayName="activities" [multiple]="true" [selectable]="true">
          <label *ngFor="let activity of activitiesFormArray.controls; let i = index">
            <mat-chip
              #chip="matChip"
              [selectable]="true"
              (click)="handleSelect(i, activitiesEnum[activityKeys[i]])"
            >
              {{ activitiesEnum[activityKeys[i]] }}
            </mat-chip>
          </label>
        </mat-chip-list>
      </mat-form-field>
    </form>
  </div>`,
  styleUrls: ['./sub-goals-box.component.scss'],
})
export class SubGoalsBoxComponent implements OnInit {
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
    this.addActivityChips();
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

  handleSelect(index, activity) {
    this.activitiesFormArray.controls[index].patchValue(activity);
  }

  private addActivityChips() {
    this.activityKeys.forEach(() => this.activitiesFormArray.push(new FormControl(false)));
  }
}
