import {
  StorageServiceService,
  TEACHER_ONBOARDING,
} from './../../../shared/storage-service.service';
import { TeacherOnboardingFormService } from './../../services/teacher-onboarding-form.service';
import { OnboardingService } from './../../../shared/onboarding.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AgeGroups, AgeGroupsLiteralsMap } from '../../teacher-onboarding.enums';

export const MARKET = 'market';
export const GROUPS = 'ageGroups';
export const SESSION_AREA = 'sessionArea';
const DEFAULT_CHECKBOX = AgeGroups.Adults;
@UntilDestroy()
@Component({
  selector: 'app-session-focus-area-step',
  templateUrl: './session-focus-area-step.component.html',
  styleUrls: ['./session-focus-area-step.component.scss'],
})
export class SessionFocusAreaStepComponent {
  form: FormGroup;
  groupsLiteralsMap = AgeGroupsLiteralsMap;
  formValueChanges$: Subscription;
  controlKey = TEACHER_ONBOARDING + '-' + MARKET;
  defaultCheckbox = DEFAULT_CHECKBOX;

  get sessionArea() {
    return this.form.get(SESSION_AREA);
  }

  get groupsFormArray() {
    return this.form.get(GROUPS) as FormArray;
  }

  get values() {
    return this.form.value[GROUPS].map((checked, i) =>
      checked ? Array.from(this.groupsLiteralsMap.keys())[i] : null
    ).filter((v) => v !== null);
  }

  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: OnboardingService,
    private formService: TeacherOnboardingFormService,
    private storage: StorageServiceService
  ) {
    this.form = this._formBuilder.group({
      [SESSION_AREA]: ['', [Validators.required, Validators.minLength(10)]],
      [GROUPS]: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });

    this.initForm();
  }

  initForm() {
    this.formService.setControls([
      [GROUPS, new FormArray([])],
      [SESSION_AREA, new FormControl()],
    ]);

    this.onboardingService.addCheckboxes(
      Array.from(this.groupsLiteralsMap.keys()),
      this.groupsFormArray
    );

    this.getCache();

    this.subscribeToValueChanges();
  }

  getCache() {
    this.storage
      .getItem(this.controlKey)
      .pipe(untilDestroyed(this))
      .subscribe((cacheValue) => {
        if (cacheValue) {
          this.form.patchValue(cacheValue);
        } else {
          this.preselectDefaultCheckbox();
        }
      });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this.formService.ageGroupsFormArray.clear();

      this.values.forEach((value) => {
        this.formService.ageGroupsFormArray.push(new FormControl(value));
      });
      // }
      this.formService.form.patchValue({
        [SESSION_AREA]: value[SESSION_AREA],
      });
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, value);
      }
    });
  }

  preselectDefaultCheckbox() {
    if (this.defaultCheckbox) {
      this.groupsFormArray
        .get([Array.from(this.groupsLiteralsMap.keys()).indexOf(this.defaultCheckbox)])
        .patchValue(true);
    }
  }

  isValid() {
    return this.form.valid;
  }

  asIsOrder(a, b) {
    return 1;
  }

  handleSelected($event, index) {
    if (index === 4 && $event.target.checked) {
      this.form.patchValue({
        [GROUPS]: [true, true, true, true, true],
      });
    }
    if (index !== 4) {
      this.storage
      .getItem(this.controlKey)
      .pipe(untilDestroyed(this))
      .subscribe((cacheValue) => {
        if (cacheValue) {
          if ($event.target.checked && cacheValue[GROUPS][0] && cacheValue[GROUPS][1] && cacheValue[GROUPS][2] && cacheValue[GROUPS][3]) {
            this.form.patchValue({
              [GROUPS]: [true, true, true, true, true],
            });
          } else if (!$event.target.checked && cacheValue[GROUPS][4]) {
            cacheValue[GROUPS][4] = false;
            this.form.patchValue({
              [GROUPS]: cacheValue[GROUPS],
            });
          }
        }
      });

    }
  }
}
