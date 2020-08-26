import { Pillar, JoieMovement } from './../../../../../sessions/models/session';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';
import {
  ConnectionsActivities,
  MovementActivities,
  EmotionsActivities,
  ProfessionalActivities,
  SpiritActivities,
} from '../../../../../sessions/models/session';
import { database } from 'firebase';

@Component({
  selector: 'app-sub-goals-box',
  template: `<div class="box-with-badge">
    <h3>{{ pillar }}</h3>
    <form [formGroup]="formGroup">
      <mat-form-field>
        <mat-chip-list [multiple]="true" [selectable]="true">
          <label
            formArrayName="activities"
            *ngFor="let activity of activitiesFormArray.controls; let i = index"
          >
            <mat-chip #chip="matChip" [formControlName]="i" [selectable]="true">
              <!-- {{ activity | json }}} -->
            </mat-chip>
          </label>
        </mat-chip-list>
        <!-- <mat-chip-list [multiple]="true" [selectable]="true">
          <label
            *ngFor="let subgoal of subgoalsFormArray.value; let i = index"
            formArrayName="subgoals"
          >
            <mat-chip
              #chip="matChip"
              [selected]="entry(subgoal)[1]"
              [selectable]="true"
              (click)="handleSelect(entry(subgoal)[0], entry(subgoal)[1], i)"
              >{{ entry(subgoal)[0] }}</mat-chip
            >
          </label>
        </mat-chip-list> -->
      </mat-form-field>
    </form>
  </div>`,
  styleUrls: ['./sub-goals-box.component.scss'],
})
export class SubGoalsBoxComponent implements OnInit {
  // @Input() title: string;
  // @Input() subgoalsData;
  @Input() pillar;
  @Input() parentFormGroup;
  JoieMovement = JoieMovement;
  public formGroup: FormGroup;
  get keys() {
    return Object.keys(this.pillar);
  }

  get activityKeys() {
    return Object.keys(this.pillar);
  }

  get activitiesFormArray() {
    return this.formGroup.controls.activities as FormArray;
  }
  // movementEnum = MovementActivities;
  // emotionsEnum = EmotionsActivities;
  // connectionsEnum = ConnectionsActivities;
  // professionalEnum = ProfessionalActivities;
  // spiritEnum = SpiritActivities;

  // // activities = [];
  // get movementKeys() {
  //   return Object.keys(this.movementEnum);
  // }
  // get emotionsKeys() {
  //   return Object.keys(this.emotionsEnum);
  // }
  // get connectionsKeys() {
  //   return Object.keys(this.connectionsEnum);
  // }
  // get professionalKeys() {
  //   return Object.keys(this.professionalEnum);
  // }
  // get spiritKeys() {
  //   return Object.keys(this.spiritEnum);
  // }

  // get activitiesFormArray() {
  //   return this.formGroup.controls[activities]
  // }
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      subgoals: new FormArray([], atLeastOneIsCheckedValidator()),
      activities: new FormArray([]),
    });
    // console.log(this.activityKeys);
    // this.addActivityChips();
  }

  addActivityChips() {
    this.activityKeys.forEach(() => this.activitiesFormArray.push(new FormControl(false)));
    console.log(this.activitiesFormArray);
  }
  // getActivitiesData(pillar) {
  //   switch (pillar) {
  //     case Pillar.movement:
  //       // this.activitiesFormArray.push(this.movementKeys);
  //       // this.
  //       break;
  //     case Pillar.emotions:
  //       break;
  //     case Pillar.connections:
  //       break;
  //   }
  // }

  submit() {
    const selectedActivityTitles = this.formGroup.value.activities
      .map((checked, i) => (checked ? this.pillar[this.activityKeys[i]] : null))
      .filter((v) => v !== null);

    console.log(selectedActivityTitles);
    return { activities: selectedActivityTitles };
  }

  ngOnInit(): void {
    // let student = history.state.student || null;
    // if (student && 'subgoalsCtrl' in student) {
    //   this.addCheckboxesFromCache(student.subgoalsCtrl[this.title].subgoals);
    // } else {
    //   this.addChips();
    // }
    // this.formGroup.setParent(this.parentFormGroup);
    console.log(this.pillar);
    this.addActivityChips();

    console.log(this.formGroup);
  }

  // get subgoalsFormArray() {
  //   return this.formGroup.controls.subgoals as FormArray;
  // }

  // entry(obj) {
  //   return Object.entries(obj)[0];
  // }
  // handleSelect(title, isSelected, index) {
  //   this.subgoalsFormArray.controls[index].patchValue({
  //     [title]: !isSelected,
  //   });
  // }

  // private addCheckboxesFromCache(subgoals) {
  //   subgoals.forEach((goal) => {
  //     let entries = this.entry(goal);
  //     this.subgoalsFormArray.push(new FormControl({ [entries[0]]: entries[1] }));
  //   });
  // }

  // private addChips() {
  //   this.subgoalsData.forEach(({ title, selected }) =>
  //     this.subgoalsFormArray.push(new FormControl({ [title]: selected }))
  //   );
  // }
}
