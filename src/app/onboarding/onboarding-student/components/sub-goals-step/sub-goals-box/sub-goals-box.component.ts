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
  template: `<div class="box-with-badge">
    <h3>{{ title }}</h3>
    <form [formGroup]="formGroup">
      <mat-form-field>
        <mat-chip-list multiple>
          <label
            *ngFor="let subgoal of subgoalsData; let i = index"
            formArrayName="subgoalsCtrl"
          >
            <mat-chip
              selectable="true"
              (click)="toggleSubgoal(subgoal)"
              (selectionChange)="onSelectionChange($event)"
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
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get subgoals(): FormArray {
    return this.formGroup.get('subgoalsCtrl') as FormArray;
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      subgoalsCtrl: new FormArray([]),
      //todo for validation  gotta wrap it in form group and add
      // a custom validator "required to selecet at least one"
      // This gonna be reusable for every checkboxes group
    });
    this.addChips();
  }

  private addChips() {
    this.subgoalsData.forEach(() =>
      this.subgoalsFormArray.push(new FormControl(false, Validators.required))
    );
  }

  get subgoalsFormArray() {
    return this.formGroup.controls.subgoalsCtrl as FormArray;
  }

  getChipListValue() {
    return this.formGroup.value.subgoalsCtrl
      .map((checked, i) => (checked ? this.subgoalsFormArray[i].id : null))
      .filter((v) => v !== null);
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
