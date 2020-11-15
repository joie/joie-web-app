import {
  MovementTargetsLiteralsMap,
  EmotionsTargetsLiteralsMap,
  ConnectionTargetsLiteralsMap,
  ProfessionalTargetsLiteralsMap,
  ConnectionsTargets,
  SpiritTargets,
  ProfessionalTargets,
  SpiritTargetsLiteralsMap,
  MovementTargets,
  EmotionsTargets,
  Pillar,
} from '../../../../../../../../../libs/schemes/src';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../../shared/storage-service.service';
import { PILLARS } from '../../../../../pillar-list/components/pillar-list/pillar-list.component';
import { OnboardingService } from '../../../../shared/onboarding.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

export const ACTIVITIES = 'activities';
type TypeActivitiesLiteralMap = Map<
  MovementTargets | EmotionsTargets | ConnectionsTargets | SpiritTargets | ProfessionalTargets,
  string
>;
// need it to explicitly give a type the the activity map because
// typeScript throws error https://github.com/microsoft/TypeScript/issues/8936
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
  movementLiteralsMap = MovementTargetsLiteralsMap;
  emotionsLiteralsMap = EmotionsTargetsLiteralsMap;
  connectionsLiteralsMap = ConnectionTargetsLiteralsMap;
  spiritLiteralsMap = SpiritTargetsLiteralsMap;
  professionalLiteralsMap = ProfessionalTargetsLiteralsMap;

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
    private storage: StorageServiceService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [this.pillar]: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });

    this.controlKey = USER_ONBOARDING + '-' + PILLARS + '-' + this.pillar;

    this.initForm();
  }

  ngAfterViewInit(): void {
    this.subscribeToValueChanges();
  }

  initForm() {
    this.onboardingService.addCheckboxes(Array.from(this.activitiesLiteralsMap.keys()), this.activitiesFormArray);

    this.getCache();
  }

  getCache() {
    this.storage
      .getItem(this.controlKey)
      .pipe(untilDestroyed(this))
      .subscribe((cacheValue) => {
        if (cacheValue) {
          this.activitiesFormArray.setValue(cacheValue);
        }
      });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((changedVal) => {
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
