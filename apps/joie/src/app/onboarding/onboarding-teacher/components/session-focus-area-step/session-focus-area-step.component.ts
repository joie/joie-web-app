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
  // formGroup: FormGroup;
  // focusGroupsData = [
  //   { group: 'Children (6-14)', isChecked: false },
  //   { group: 'Youth (15-24)', isChecked: false },
  //   { group: 'Adults (25-64)', isChecked: false }, //todo when refactoring make this checkbox selected by default - adult is the most popular choice
  //   { group: 'Eldery (65+)', isChecked: false },
  //   { group: 'All of the above', isChecked: false },
  // ];
  form: FormGroup;
  groupsEnum = AgeGroups;
  formValueChanges$;
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

    this.formService.setControls([
      [GROUPS, new FormArray([])],
      [SESSION_AREA, new FormControl()],
    ]);

    this.onboardingService.addCheckboxes(this.groupKeys, this.groupsFormArray);

    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue(cacheValue);
      } else {
        this.preselectDefaultCheckbox();
      }
    });

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

    // let teacher = history.state.teacher || null;
    // if (teacher && 'ageGroups' in teacher) {
    //   this.initFormWithCachedData(teacher);
    // } else {
    //   this.addCheckboxes();
    // }
  }

  log() {
    console.log(this.form.value);
    console.log(this.values);
  }

  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  preselectDefaultCheckbox() {
    if (this.defaultCheckbox) {
      this.groupsFormArray.get([this.groupKeys.indexOf(this.defaultCheckbox)]).patchValue(true);
    }
  }

  // get groupsFormArray() {
  //   return this.form.controls.ageGroups as FormArray;
  // }

  // entry(obj) {
  // return Object.entries(obj)[0];
  // }

  // handleCheck(group, isChecked, index) {
  //   this.groupsFormArray.controls[index].patchValue({
  //     [group]: !isChecked,
  //   });
  // }

  // private addCheckboxes() {
  //   this.focusGroupsData.forEach(({ group, isChecked }) =>
  //     this.groupsFormArray.push(new FormControl({ [group]: isChecked }))
  //   );
  // }

  // private addCheckboxesFromCache(groups) {
  //   groups.forEach((group) => {
  //     let entries = this.entry(group);
  //     this.groupsFormArray.push(new FormControl({ [entries[0]]: entries[1] }));
  //   });
  // }

  // private initFormWithCachedData(teacher) {
  //   this.formGroup.controls['sessionArea'].setValue(teacher.sessionArea);
  //   this.addCheckboxesFromCache(teacher.ageGroups);
  // }
}
