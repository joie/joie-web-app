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
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';

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
        <button (click)="submit()">submit</button>
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
  public formGroup: FormGroup;
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
      // subgoals: new FormArray([], atLeastOneIsCheckedValidator()),
      activities: new FormArray([]),
    });
    // console.log(this.activityKeys);
    // this.addActivityChips();
  }

  addActivityChips() {
    console.log('pillar', this.pillar);
    console.log(this.activityKeys);
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

  handleSelect(index, activity) {
    this.activitiesFormArray.controls[index].patchValue(activity);
    // this.formGroup.controls.activities.setValue(activity);
  }

  submit() {
    console.log(this.formGroup.value.activities);
    const selectedActivityTitles = this.formGroup.value.activities
      .map((selected, i) => (selected ? this.activitiesEnum[this.activityKeys[i]] : null))
      .filter((v) => v !== null);

    console.log(selectedActivityTitles);
    return selectedActivityTitles;
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
