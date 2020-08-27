import { length } from 'ramda';
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
      sessionTypes: new FormArray([]), // todo validators
    });
    this.addTypeCheckboxes();
  }

  ngOnInit(): void {
    // todo restoreFromCache();
  }

  isValid() {
    return this.submit().sessionTypes.length === 1;
  }
  submit() {
    const selectedTypes = this.formGroup.value.sessionTypes
      .map((checked, i) => (checked ? this.typesEnum[this.typeKeys[i]] : null))
      .filter((v) => v !== null);
    return { sessionTypes: selectedTypes };
  }

  private addTypeCheckboxes() {
    this.typeKeys.forEach(() => this.typesFormArray.push(new FormControl(false)));
  }
}
