import { skip } from 'rxjs/operators';
import { Pillar } from '../../../../sessions/models/session';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';

export const PILLARS = 'pillars';
@Component({
  selector: 'app-pillar-step',
  templateUrl: './pillar-step.component.html',
  styleUrls: ['./pillar-step.component.scss'],
})
export class PillarStepComponent implements OnDestroy {
  formGroup: FormGroup;
  pillarEnum = Pillar;
  formValueChanges$;

  get pillarKeys() {
    return Object.keys(Pillar);
  }

  get pillarFormArray() {
    return this.formGroup.controls.pillars as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {
    this.formGroup = this._formBuilder.group({
      pillars: new FormArray([], atLeastOneIsCheckedValidator()),
    });
    this.fillFormArray();

    //subscribe to value chan ges skip form init
    this.formValueChanges$ = this.formGroup.valueChanges
      .pipe(skip(this.pillarKeys.length))
      .subscribe(() => this.storage.setItemSubscribe(USER_ONBOARDING, this.submit()));
  }
  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  fillFormArray() {
    this.storage.getItem(USER_ONBOARDING).subscribe((res) => {
      let pillarsFromCache = res ? res[PILLARS] : null;
      if (pillarsFromCache) {
        this.formGroup.controls[PILLARS].markAsTouched();
      }
      this.onboardingService.addCheckboxes(
        this.pillarKeys,
        this.pillarFormArray,
        this.pillarEnum,
        pillarsFromCache
      );
    });
  }

  isValid() {
    return this.formGroup.valid;
  }

  submit() {
    const selectedPillarTitles = this.formGroup.value.pillars
      .map((checked, i) => (checked ? this.pillarEnum[this.pillarKeys[i]] : null))
      .filter((v) => v !== null);
    return { pillars: selectedPillarTitles };
  }
}
