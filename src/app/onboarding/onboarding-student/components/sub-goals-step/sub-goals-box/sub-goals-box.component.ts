import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';

@Component({
  selector: 'app-sub-goals-box',
  template: `<div class="box-with-badge">
    <h3>{{ title }}</h3>
    <form [formGroup]="formGroup">
      <mat-form-field>
        <mat-chip-list [multiple]="true" [selectable]="true">
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
        </mat-chip-list>
      </mat-form-field>
    </form>
  </div>`,
  styleUrls: ['./sub-goals-box.component.scss'],
})
export class SubGoalsBoxComponent implements OnInit {
  @Input() title: string;
  @Input() subgoalsData;
  @Input() parentFormGroup;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      subgoals: new FormArray([], atLeastOneIsCheckedValidator()),
    });
  }

  ngOnInit(): void {
    let studentData = history.state.studentData || null;
    if (studentData && 'subgoalsCtrl' in studentData) {
      this.addCheckboxesFromCache(
        studentData.subgoalsCtrl[this.title].subgoals
      );
    } else {
      this.addChips();
    }
    this.formGroup.setParent(this.parentFormGroup);
  }

  get subgoalsFormArray() {
    return this.formGroup.controls.subgoals as FormArray;
  }

  entry(obj) {
    return Object.entries(obj)[0];
  }
  handleSelect(title, isSelected, index) {
    this.subgoalsFormArray.controls[index].patchValue({
      [title]: !isSelected,
    });
  }

  private addCheckboxesFromCache(subgoals) {
    subgoals.forEach((goal) => {
      let entries = this.entry(goal);
      this.subgoalsFormArray.push(
        new FormControl({ [entries[0]]: entries[1] })
      );
    });
  }

  private addChips() {
    this.subgoalsData.forEach(({ title, selected }) =>
      this.subgoalsFormArray.push(new FormControl({ [title]: selected }))
    );
  }
}
