import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-session-focus-area-step',
  templateUrl: './session-focus-area-step.component.html',
  styleUrls: ['./session-focus-area-step.component.scss'],
})
export class SessionFocusAreaStepComponent {
  formGroup: FormGroup;
  focusGroupsData = [
    { id: 1, group: 'Children (6-14)' },
    { id: 2, group: 'Youth (15-24)' },
    { id: 3, group: 'Adults (25-64)' },
    { id: 4, group: 'Eldery (65+)' },
    { id: 5, group: 'All of the above' },
  ];
  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      sessionAreaCtrl: ['', [Validators.required, Validators.minLength(10)]],
      focusGroupsCtrl: new FormArray([]),
    });
    this.addCheckboxes();
  }

  get groupsFormArray() {
    return this.formGroup.controls.focusGroupsCtrl as FormArray;
  }

  private addCheckboxes() {
    this.focusGroupsData.forEach(() =>
      this.groupsFormArray.push(new FormControl(false))
    );
  }

  getCheckboxListValue() {
    return this.formGroup.value.focusGroupsCtrl
      .map((checked, i) => (checked ? this.focusGroupsData[i].id : null))
      .filter((v) => v !== null);
  }
}
