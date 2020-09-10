import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { urlRegExPattern } from '../../../../models/regex';

// todo add validation error messages after refactoring the checkboxes part
// todo when refactoring checkboxes part, create an enum for sessionTypes (diffrent from the existing ones), and comment out courses fields (we dont have courses yet)
@Component({
  selector: 'app-online-presence-step',
  templateUrl: './online-presence-step.component.html',
  styleUrls: ['./online-presence-step.component.scss'],
})
export class OnlinePresenceStepComponent implements OnInit {
  formGroup: FormGroup;
  sessionTypesData = [
    { type: 'On-demand session or a lecture', isChecked: false },
    { type: 'On-demand course', isChecked: false },
    { type: 'Live group session', isChecked: false },
    { type: 'Live group course', isChecked: false },
    { type: 'Live lecture', isChecked: false },
    { type: 'Live 1:1 coaching', isChecked: false },
  ];
  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      teachingPortfolioUrlCtrl: ['', [Validators.required, Validators.pattern(urlRegExPattern)]],
      sessionTypesCtrl: new FormArray([], atLeastOneIsCheckedValidator()),
    });
  }
  ngOnInit(): void {
    let teacher = history.state.teacher || null;
    if (teacher && 'sessionTypesCtrl' in teacher) {
      this.initFormWithCachedData(teacher);
    } else {
      this.addCheckboxes();
    }
  }

  get sessionTypesFormArray() {
    return this.formGroup.controls.sessionTypesCtrl as FormArray;
  }

  entry(obj) {
    return Object.entries(obj)[0];
  }

  handleCheck(sessionType, isChecked, index) {
    this.sessionTypesFormArray.controls[index].patchValue({
      [sessionType]: !isChecked,
    });
  }

  private addCheckboxesFromCache(sessionTypes) {
    sessionTypes.forEach((type) => {
      let entries = this.entry(type);
      this.sessionTypesFormArray.push(new FormControl({ [entries[0]]: entries[1] }));
    });
  }

  private addCheckboxes() {
    this.sessionTypesData.forEach(({ type, isChecked }) =>
      this.sessionTypesFormArray.push(new FormControl({ [type]: isChecked }))
    );
  }

  private initFormWithCachedData(teacher) {
    this.formGroup.controls['teachingPortfolioUrlCtrl'].setValue(teacher.teachingPortfolioUrlCtrl);
    this.addCheckboxesFromCache(teacher.sessionTypesCtrl);
  }
}
