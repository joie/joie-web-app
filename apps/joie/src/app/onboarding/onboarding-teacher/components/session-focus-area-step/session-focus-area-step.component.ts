import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
// todo add validation error messages after refactoring the checkboxes part

@Component({
  selector: 'app-session-focus-area-step',
  templateUrl: './session-focus-area-step.component.html',
  styleUrls: ['./session-focus-area-step.component.scss'],
})
export class SessionFocusAreaStepComponent {
  formGroup: FormGroup;
  focusGroupsData = [
    { group: 'Children (6-14)', isChecked: false },
    { group: 'Youth (15-24)', isChecked: false },
    { group: 'Adults (25-64)', isChecked: false }, //todo when refactoring make this checkbox selected by default - adult is the most popular choice
    { group: 'Eldery (65+)', isChecked: false },
    { group: 'All of the above', isChecked: false },
  ];
  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      sessionAreaCtrl: ['', [Validators.required, Validators.minLength(10)]],
      focusGroupsCtrl: new FormArray(
        [],
        [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });

    let teacher = history.state.teacher || null;
    if (teacher && 'focusGroupsCtrl' in teacher) {
      this.initFormWithCachedData(teacher);
    } else {
      this.addCheckboxes();
    }
  }

  get groupsFormArray() {
    return this.formGroup.controls.focusGroupsCtrl as FormArray;
  }

  entry(obj) {
    return Object.entries(obj)[0];
  }

  handleCheck(group, isChecked, index) {
    this.groupsFormArray.controls[index].patchValue({
      [group]: !isChecked,
    });
  }

  private addCheckboxes() {
    this.focusGroupsData.forEach(({ group, isChecked }) =>
      this.groupsFormArray.push(new FormControl({ [group]: isChecked }))
    );
  }

  private addCheckboxesFromCache(groups) {
    groups.forEach((group) => {
      let entries = this.entry(group);
      this.groupsFormArray.push(new FormControl({ [entries[0]]: entries[1] }));
    });
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['sessionAreaCtrl'].setValue(teacher.sessionAreaCtrl);
    this.addCheckboxesFromCache(teacher.focusGroupsCtrl);
  }
}
