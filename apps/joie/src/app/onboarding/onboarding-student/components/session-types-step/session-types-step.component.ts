import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';

export enum SessionTypes { //todo do we need this enum wherever in the app?
  ondemand = 'On-demand sessions',
  livestreaming = 'Live streaming sessions',
  coaching = '1:1 coaching sessions',
}
@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent implements OnInit {
  formGroup: FormGroup;
  // sessionTypesData = [
  //   { sessionType: 'On-demand sessions', isChecked: false },
  //   { sessionType: 'Live streaming sessions', isChecked: false },
  //   { sessionType: '1:1 coaching sessions', isChecked: false },
  // ];
  typesEnum = SessionTypes;
  get typeKeys() {
    return Object.keys(this.typesEnum);
  }

  get typesFormArray() {
    return this.formGroup.controls.sessionTypes as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService
  ) {
    this.formGroup = this._formBuilder.group({
      sessionTypes: new FormArray([]),
      // sessionTypesCtrl: new FormArray(
      //   [],
      //   [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      // ),
    });
    this.addTypeCheckboxes();
  }
  private addTypeCheckboxes() {
    this.typeKeys.forEach(() => this.typesFormArray.push(new FormControl(false)));
  }

  submit() {
    const selectedTypes = this.formGroup.value.sessionTypes
      .map((checked, i) => (checked ? this.typesEnum[this.typeKeys[i]] : null))
      .filter((v) => v !== null);
    return { sessionTypes: selectedTypes };
  }
  ngOnInit(): void {
    // let student = history.state.student || null;
    // if (student && 'sessionTypesCtrl' in student) {
    //   this.addCheckboxesFromCache(student.sessionTypesCtrl);
    // } else {
    //   this.addCheckboxes();
    // }
  }

  // get sessionTypesArray() {
  //   return this.formGroup.controls.sessionTypesCtrl as FormArray;
  // }

  // entry(obj) {
  //   return Object.entries(obj)[0];
  // }

  // handleCheck(sessionType, isChecked, index) {
  //   this.sessionTypesArray.controls[index].patchValue({
  //     [sessionType]: !isChecked,
  //   });
  // }

  // private addCheckboxesFromCache(sessionTypes) {
  //   sessionTypes.forEach((sessionType) => {
  //     let entries = this.entry(sessionType);
  //     this.sessionTypesArray.push(new FormControl({ [entries[0]]: entries[1] }));
  //   });
  // }

  // private addCheckboxes() {
  //   this.sessionTypesData.forEach(({ sessionType, isChecked }) =>
  //     this.sessionTypesArray.push(new FormControl({ [sessionType]: isChecked }))
  //   );
  // }
}
