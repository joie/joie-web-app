import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';

@Component({
  selector: 'app-sub-goals-box',
  template: `<div class="box-with-badge">
    <h3>{{ title }}</h3>
    <form [formGroup]="formGroup">
      <mat-form-field>
        <mat-chip-list [multiple]="true" [selectable]="true">
          <label
            *ngFor="let subgoal of subgoalsData; let i = index"
            formArrayName="subgoalsCtrl"
          >
            <mat-chip
              #chip="matChip"
              [selected]="subgoal.selected"
              [selectable]="true"
              (click)="subgoal.selected ? chip.deselect() : chip.select()"
              (selectionChange)="handleSelect(subgoal, i)"
              >{{ subgoal.title }}</mat-chip
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

  constructor(private formBuilder: FormBuilder) {}

  get subgoals(): FormArray {
    return this.formGroup.get('subgoalsCtrl') as FormArray;
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      subgoalsCtrl: new FormArray([], atLeastOneIsCheckedValidator()),
    });
    this.addChips();
    this.formGroup.setParent(this.parentFormGroup);
  }

  get subgoalsFormArray() {
    return this.formGroup.controls.subgoalsCtrl as FormArray;
  }

  handleSelect({ title, selected }, index) {
    this.subgoalsFormArray.controls[index].patchValue({
      [title]: !selected,
    });
  }

  private addChips() {
    this.subgoalsData.forEach(({ title, selected }) =>
      this.subgoalsFormArray.push(new FormControl({ [title]: selected }))
    );
  }
}
