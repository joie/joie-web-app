import {
  Pillar,
  JoieMovement,
  JoieEmotions,
  JoieConnections,
  JoieProfessional,
  JoieSpirit,
} from '../../../../../sessions/models';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../../shared/storage-service.service';
import { skip } from 'rxjs/operators';
import { StudentOnboardingService } from '../../../service/student-onboarding.service';

export const ACTIVITIES = 'activities';
@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.scss'],
})
export class ActivitiesBoxComponent implements OnInit, OnDestroy {
  @Input() pillar;
  public formGroup: FormGroup;
  formValueChanges$;

  get activitiesEnum() {
    switch (this.pillar) {
      case Pillar.Movement:
        return JoieMovement;
      case Pillar.Emotions:
        return JoieEmotions;
      case Pillar.Connections:
        return JoieConnections;
      case Pillar.Professional:
        return JoieProfessional;
      case Pillar.Spirit:
        return JoieSpirit;
    }
  }
  get activityKeys() {
    return Object.keys(this.activitiesEnum);
  }

  get activitiesFormArray() {
    return this.formGroup.controls.activities as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {
    this.formGroup = this.formBuilder.group({
      activities: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });
  }
  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  ngOnInit(): void {
    this.formValueChanges$ = this.formGroup.valueChanges
      .pipe(skip(this.activityKeys.length))
      .subscribe(() =>
        this.storage.setItemSubscribe(USER_ONBOARDING, { activities: this.submit() })
      );
    this.fillFormArray();
  }

  fillFormArray() {
    this.storage.getItem(USER_ONBOARDING).subscribe((res) => {
      let activitiesFromCache = res ? res[ACTIVITIES] : null;
      if (activitiesFromCache) {
        this.formGroup.controls[ACTIVITIES].markAsTouched();
      }
      this.onboardingService.addCheckboxes(
        this.activityKeys,
        this.activitiesFormArray,
        this.activitiesEnum,
        activitiesFromCache
      );
    });
  }

  submit() {
    const selectedActivityTitles = this.formGroup.value.activities
      .map((selected, i) => (selected ? this.activitiesEnum[this.activityKeys[i]] : null))
      .filter((v) => v !== null);
    return selectedActivityTitles;
  }

  handleSelect(index, selected) {
    if (selected) {
      this.activitiesFormArray.controls[index].patchValue(true);
    } else {
      this.activitiesFormArray.controls[index].patchValue(false);
    }
  }
}
