import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { SessionTypes } from '../../models/student';

@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent {
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
      sessionTypes: new FormArray(
        [],
        [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });
    this.fillFormArray();
  }

  fillFormArray() {
    let student = history.state.student || null;
    if (student && student.sessionTypes) {
      this.formGroup.controls['sessionTypes'].markAsTouched();
      this.addTypeCheckboxesFromCache(student.sessionTypes);
    } else {
      this.addTypeCheckboxes();
    }
  }

  isValid() {
    return this.formGroup.valid;
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

  private addTypeCheckboxesFromCache(sessionTypes) {
    this.typeKeys.forEach((key) => {
      if (sessionTypes.includes(this.typesEnum[key])) {
        this.typesFormArray.push(new FormControl(true));
      } else {
        this.typesFormArray.push(new FormControl(false));
      }
    });
  }
}
