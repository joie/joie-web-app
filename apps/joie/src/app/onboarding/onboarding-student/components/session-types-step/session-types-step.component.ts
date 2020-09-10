import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { SessionTypes } from '../../models/student';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';
import { sessionTypesData } from './sessionTypesData';
import { OnboardingService } from '../../../shared/onboarding.service';
import { Subscription } from 'rxjs';

export const SESSION_TYPES_KEY = 'session-types';
export const SESSION_TYPES = 'sessionTypes';

@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent implements OnDestroy {
  form: FormGroup;
  typesEnum = SessionTypes;
  sessionTypesData = sessionTypesData;
  formValueChanges$: Subscription;
  controlKey = USER_ONBOARDING + '-' + SESSION_TYPES_KEY;

  get typeKeys() {
    return Object.keys(this.typesEnum);
  }

  get typesFormArray() {
    return this.form.controls.sessionTypes as FormArray;
  }

  get values() {
    return this.form.value.sessionTypes
      .map((checked, i) => (checked ? this.typesEnum[this.typeKeys[i]] : null))
      .filter((v) => v !== null);
  }

  constructor(
    private _formBuilder: FormBuilder,
    public authService: AuthService,
    public onboardingService: OnboardingService,
    private storage: StorageServiceService,
    private formService: StudentOnboardingFormService
  ) {
    this.form = this._formBuilder.group({
      sessionTypes: new FormArray(
        [],
        [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });

    this.formService.setControl([SESSION_TYPES, new FormArray([])]);

    this.onboardingService.addCheckboxes(this.typeKeys, this.typesFormArray);

    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue({ [SESSION_TYPES]: cacheValue });
      }
    });

    this.formValueChanges$ = this.form.valueChanges.subscribe((value) => {
      this.formService.sessionTypesFormArray.clear();
      this.values.forEach((value) => {
        this.formService.sessionTypesFormArray.push(new FormControl(value));
      });

      if (this.form.valid) {
        // not caching invalid value
        this.storage.setItemSubscribe(this.controlKey, value[SESSION_TYPES]);
      }
    });
  }

  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  isValid() {
    return this.form.valid;
  }

  finishOnboarding() {
    console.log(this.formService.form.value);
  }
}
