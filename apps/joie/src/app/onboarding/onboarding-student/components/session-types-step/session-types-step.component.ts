import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { SessionTypes } from '../../models/student';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';
import { merge } from 'lodash';
export const SESSION_TYPES = 'sessionTypes';
@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent implements OnDestroy {
  form: FormGroup;
  typesEnum = SessionTypes;
  formValueChanges$;
  controlKey = USER_ONBOARDING + '-' + SESSION_TYPES;

  get typeKeys() {
    return Object.keys(this.typesEnum);
  }

  get typesFormArray() {
    return this.form.controls.sessionTypes as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder,
    public authService: AuthService,
    public onboardingService: StudentOnboardingService,
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
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, value[SESSION_TYPES]);
        merge(this.formService.form.value, { [SESSION_TYPES]: this.submit() });
      }
    });
  }

  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  isValid() {
    return this.form.valid;
  }
  submit() {
    const selectedTypes = this.form.value.sessionTypes
      .map((checked, i) => (checked ? this.typesEnum[this.typeKeys[i]] : null))
      .filter((v) => v !== null);
    return selectedTypes;
  }

  finishOnboarding() {
    //todo implement
  }
}
