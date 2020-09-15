import {
  EmotionsActivitiesLiteralsMap,
  ConnectionActivitiesLiteralsMap,
  SpiritActivitiesLiteralsMap,
  ProfessionalActivitiesLiteralsMap,
} from './../../../../../sessions/models/pillars';
import {
  Pillar,
  MovementActivities,
  EmotionsActivities,
  ConnectionsActivities,
  ProfessionalActivities,
  SpiritActivities,
  MovementActivitiesLiteralsMap,
} from '../../../../../sessions/models';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../../shared/storage-service.service';
import { PILLARS } from '../../../../../pillar-list/pillar-list.component';
import { OnboardingService } from '../../../../shared/onboarding.service';
import { UntilDestroy } from '@ngneat/until-destroy';

export const ACTIVITIES = 'activities';
type TypeActivitiesLiteralMap = Map<
  | MovementActivities
  | EmotionsActivities
  | ConnectionsActivities
  | SpiritActivities
  | ProfessionalActivities,
  string
>; // need it to explicitly give a type the the activity map because typeScript throws error https://github.com/microsoft/TypeScript/issues/8936
@UntilDestroy()
@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.scss'],
})
export class ActivitiesBoxComponent implements OnInit, AfterViewInit {
  @Input() pillar;
  public form: FormGroup;
  pillarEnum = Pillar;
  controlKey: string;
  cachedValues = null;
  movementLiteralsMap = MovementActivitiesLiteralsMap;
  emotionsLiteralsMap = EmotionsActivitiesLiteralsMap;
  connectionsLiteralsMap = ConnectionActivitiesLiteralsMap;
  spiritLiteralsMap = SpiritActivitiesLiteralsMap;
  professionalLiteralsMap = ProfessionalActivitiesLiteralsMap;

  get activitiesLiteralsMap(): TypeActivitiesLiteralMap {
    switch (this.pillarEnum[this.pillar]) {
      case Pillar.Movement:
        return this.movementLiteralsMap;
      case Pillar.Emotions:
        return this.emotionsLiteralsMap;
      case Pillar.Connections:
        return this.connectionsLiteralsMap;
      case Pillar.Spirit:
        return this.spiritLiteralsMap;
      case Pillar.Professional:
        return this.professionalLiteralsMap;
    }
  }

  get activitiesFormArray() {
    return this.form.controls[this.pillar] as FormArray;
  }

  get subForm() {
    return this.form;
  }

  get values() {
    return this.form.value[this.pillar]
      .map((selected, i) => (selected ? Array.from(this.activitiesLiteralsMap.keys())[i] : null))
      .filter((v) => v !== null);
  }

  constructor(
    private formBuilder: FormBuilder,
    public onboardingService: OnboardingService,
    private storage: StorageServiceService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [this.pillar]: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });

    this.onboardingService.addCheckboxes(
      Array.from(this.activitiesLiteralsMap.keys()),
      this.activitiesFormArray
    );

    this.controlKey = USER_ONBOARDING + '-' + PILLARS + '-' + this.pillar;

    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.activitiesFormArray.setValue(cacheValue);
      }
    });
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe((changedVal) => {
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, changedVal[this.pillar]);
      }
    });
  }

  handleSelect(index, selected) {
    if (selected) {
      this.activitiesFormArray.controls[index].patchValue(true);
    } else {
      this.activitiesFormArray.controls[index].patchValue(false);
    }
  }

  asIsOrder(a, b) {
    return 1;
  }
}
