import { StudentOnboardingFormService } from './../../student-onboarding-form.service';
import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { SessionTypesLiteralMap } from '../../models/student';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';
import { sessionTypesData } from './sessionTypesData';
import { OnboardingService } from '../../../shared/onboarding.service';
import { UntilDestroy } from '@ngneat/until-destroy';

export const SESSION_TYPES_KEY = 'session-types';
export const SESSION_TYPES = 'sessionTypes';
@UntilDestroy()
@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent {
  form: FormGroup;
  sessionTypesLiteralMap = SessionTypesLiteralMap;
  sessionTypesData = sessionTypesData;
  controlKey = USER_ONBOARDING + '-' + SESSION_TYPES_KEY;

  get typesFormArray() {
    return this.form.controls.sessionTypes as FormArray;
  }

  get values() {
    return this.form.value.sessionTypes
      .map((checked, i) => (checked ? Array.from(this.sessionTypesLiteralMap.keys())[i] : null))
      .filter((v) => v !== null);
  }

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public onboardingService: OnboardingService,
    private storage: StorageServiceService,
    private formService: StudentOnboardingFormService
  ) {
    this.form = this.fb.group({
      [SESSION_TYPES]: new FormArray(
        [],
        [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });

    this.initForm();
  }

  initForm() {
    this.formService.setControl([SESSION_TYPES, new FormArray([])]);

    this.onboardingService.addCheckboxes(
      Array.from(this.sessionTypesLiteralMap.keys()),
      this.typesFormArray
    );

    this.getCache();

    this.subscribeToValueChanges();
  }

  getCache() {
    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue({ [SESSION_TYPES]: cacheValue });
      }
    });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.subscribe((value) => {
      this.formService.sessionTypesFormArray.clear();
      this.values.forEach((valueItem) => {
        this.formService.sessionTypesFormArray.push(new FormControl(valueItem));
      });

      if (this.form.valid) {
        // not caching invalid value
        this.storage.setItemSubscribe(this.controlKey, value[SESSION_TYPES]);
      }
    });
  }

  isValid() {
    return this.form.valid;
  }

  finishOnboarding() {
    console.log(this.formService.form.value);
  }

  asIsOrder(a, b) {
    return 1;
  }
}
