import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { urlRegExPattern } from '../../../../models/regex';
import { TEACHER_ONBOARDING, StorageServiceService } from '../../../shared/storage-service.service';
import { OnboardingService } from '../../../shared/onboarding.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SessionTypesLiteralsMap } from '../../teacher-onboarding.enums';

export const TEACHING_STYLE = 'teaching-style';
export const PORTFOLIO = 'portfolio';
export const SESSION_TYPES = 'sessionTypes';
@UntilDestroy()
@Component({
  selector: 'app-online-presence-step',
  templateUrl: './online-presence-step.component.html',
  styleUrls: ['./online-presence-step.component.scss'],
})
export class OnlinePresenceStepComponent {
  form: FormGroup;
  sessionTypesLiteralsMap = SessionTypesLiteralsMap;
  controlKey = TEACHER_ONBOARDING + '-' + TEACHING_STYLE;

  get typesFormArray() {
    return this.form.controls.sessionTypes as FormArray;
  }

  get values() {
    return this.form.value.sessionTypes
      .map((checked, i) => (checked ? Array.from(this.sessionTypesLiteralsMap.keys())[i] : null))
      .filter((v) => v !== null);
  }

  get portfolio() {
    return this.form.get(PORTFOLIO);
  }

  constructor(
    private fb: FormBuilder,
    public onboardingService: OnboardingService,
    private storage: StorageServiceService,
    private formService: TeacherOnboardingFormService
  ) {
    this.form = this.fb.group({
      portfolio: ['', [Validators.required, Validators.pattern(urlRegExPattern)]],
      sessionTypes: new FormArray([], atLeastOneIsCheckedValidator()),
    });

    this.initForm();
  }

  initForm() {
    this.formService.setControls([
      [PORTFOLIO, new FormControl()],
      [SESSION_TYPES, new FormArray([])],
    ]);

    this.onboardingService.addCheckboxes(
      Array.from(this.sessionTypesLiteralsMap.keys()),
      this.typesFormArray
    );

    this.getCache();

    this.subscribeToValueChanges();
  }

  getCache() {
    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue(cacheValue);
      }
    });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.subscribe((value) => {
      this.formService.typesFormArray.clear();
      this.values.forEach((value) => {
        this.formService.typesFormArray.push(new FormControl(value));
      });
      this.formService.form.patchValue({
        [PORTFOLIO]: value[PORTFOLIO],
      });
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }

  isValid() {
    return this.form.valid;
  }

  asIsOrder(a, b) {
    return 1;
  }
}
