import {
  StorageServiceService,
  TEACHER_ONBOARDING,
} from './../../../shared/storage-service.service';
import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { OnboardingService } from './../../../shared/onboarding.service';
import { AgeGroups } from './../../../../models/teacher.model';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { Subscription } from 'rxjs';
// todo add validation error messages after refactoring the checkboxes part

export const MARKET = 'market'; //step cache key, probably should be a step name also // todo
export const GROUPS = 'ageGroups';
export const SESSION_AREA = 'sessionArea';
const DEFAULT_CHECKBOX = 'ADULTS';
@Component({
  selector: 'app-session-focus-area-step',
  templateUrl: './session-focus-area-step.component.html',
  styleUrls: ['./session-focus-area-step.component.scss'],
})
export class SessionFocusAreaStepComponent implements OnDestroy {
  form: FormGroup;
  groupsEnum = AgeGroups;
  formValueChanges$: Subscription;
  controlKey = TEACHER_ONBOARDING + '-' + MARKET;
  defaultCheckbox = DEFAULT_CHECKBOX;

  get groupKeys() {
    return Object.keys(this.groupsEnum);
  }

  get groupsFormArray() {
    return this.form.get(GROUPS) as FormArray;
  }

  get values() {
    return this.form.value[GROUPS].map((checked, i) =>
      checked ? this.groupsEnum[this.groupKeys[i]] : null
    ).filter((v) => v !== null);
  }

  constructor(
    private _formBuilder: FormBuilder,
    private onboardingService: OnboardingService,
    private formService: TeacherOnboardingFormService,
    private storage: StorageServiceService
  ) {
    this.form = this._formBuilder.group({
      sessionArea: ['', [Validators.required, Validators.minLength(10)]],
      ageGroups: new FormArray(
        []
        // [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });

    this.initForm();
  }

  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  initForm() {
    this.formService.setControls([
      [GROUPS, new FormArray([])],
      [SESSION_AREA, new FormControl()],
    ]);

    this.onboardingService.addCheckboxes(this.groupKeys, this.groupsFormArray);

    this.getCache();

    this.subscribeToValueChanges();
  }

  getCache() {
    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue(cacheValue);
      } else {
        this.preselectDefaultCheckbox();
      }
    });
  }

  subscribeToValueChanges() {
    this.formValueChanges$ = this.form.valueChanges.subscribe((value) => {
      console.log(value);

      this.formService.ageGroupsFormArray.clear();
      this.values.forEach((value) => {
        this.formService.ageGroupsFormArray.push(new FormControl(value));
      });
      this.formService.form.patchValue({
        [SESSION_AREA]: value[SESSION_AREA],
      });
      if (this.form.valid) {
        // not caching invalid value
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }

  preselectDefaultCheckbox() {
    if (this.defaultCheckbox) {
      this.groupsFormArray.get([this.groupKeys.indexOf(this.defaultCheckbox)]).patchValue(true);
    }
  }
}
