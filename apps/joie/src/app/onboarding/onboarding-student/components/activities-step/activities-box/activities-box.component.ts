import {
  Pillar,
  JoieMovement,
  JoieEmotions,
  JoieConnections,
  JoieProfessional,
  JoieSpirit,
} from '../../../../../sessions/models';
import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../../shared/storage-service.service';
import { StudentOnboardingService } from '../../../service/student-onboarding.service';
import { PILLARS } from '../../../../../pillar-list/pillar-list.component';

export const ACTIVITIES = 'activities';
@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.scss'],
})
export class ActivitiesBoxComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() pillar;
  public form: FormGroup;
  formValueChanges$;
  pillarEnum = Pillar;
  controlKey;
  cachedValues = null;

  get activitiesEnum() {
    // console.log(this.pillarEnum);
    // console.log(this.pillar);
    switch (this.pillarEnum[this.pillar]) {
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
    return this.form.controls[this.pillar] as FormArray;
  }

  get subForm() {
    return this.form;
  }

  get values() {
    return this.form.value[this.pillar]
      .map((selected, i) => (selected ? this.activitiesEnum[this.activityKeys[i]] : null))
      .filter((v) => v !== null);
  }

  constructor(
    private formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [this.pillar]: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });

    this.onboardingService.addCheckboxes(this.activityKeys, this.activitiesFormArray);

    this.controlKey = USER_ONBOARDING + '-' + PILLARS + '-' + this.pillar;

    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.activitiesFormArray.setValue(cacheValue);
      }
    });
  }

  ngAfterViewInit(): void {
    this.formValueChanges$ = this.form.valueChanges.subscribe((changedVal) => {
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, changedVal[this.pillar]);
      }
    });
  }

  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  handleSelect(index, selected) {
    if (selected) {
      this.activitiesFormArray.controls[index].patchValue(true);
    } else {
      this.activitiesFormArray.controls[index].patchValue(false);
    }
  }
}
