import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-sub-goals-box',
  template: `<div class="subgoal-box">
    <h3>{{ title }}</h3>
    <form [formGroup]="formGroup">
      <mat-form-field>
        <mat-chip-list multiple formArrayName="subgoalsCtrl">
          <label
            *ngFor="let subgoal of subgoals.controls; let i = index"
            [formGroupName]="i"
          >
            <mat-chip
              selectable="true"
              [selected]="subgoal.value.isSelected"
              (click)="toggleSubgoal(subgoal)"
              (selectionChange)="onSelectionChange($event)"
              >{{ subgoal.value.title }}</mat-chip
            >
          </label>
        </mat-chip-list>
      </mat-form-field>
    </form>
  </div>`,
  styleUrls: ['./sub-goals-box.component.scss'],
})
export class SubGoalsBoxComponent implements OnInit {
  @Input() title: string;
  @Input() subgoalsData;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get subgoals(): FormArray {
    return this.formGroup.get('subgoalsCtrl') as FormArray;
  }

  logForm() {
    //todo for debugging rm later
    console.log(this.formGroup);
    console.log(this.formGroup.get('subgoalsCtrl'));
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      subgoalsCtrl: this.formBuilder.array(this.subgoalsData),
    });
    this.logForm();
  }

  onSelectionChange(event) {
    event.source._color = event.source._selected ? 'primary' : 'basic';
    // current styles seem to block color change but either this or chipColor() should work
  }
  toggleSubgoal(subgoal) {
    subgoal.isSelected = !subgoal.isSelected;
    console.log(`toggled  ${!subgoal.isSelected} -> ${subgoal.isSelected}`);
  }
}
