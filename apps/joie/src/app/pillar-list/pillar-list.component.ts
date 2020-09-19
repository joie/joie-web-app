import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PillarsLiteralMap } from './../sessions/models/session';
import { OnboardingService } from './../onboarding/shared/onboarding.service';
import {
  StorageServiceService,
  USER_ONBOARDING,
} from './../onboarding/shared/storage-service.service';
import { FormGroup, FormArray } from '@angular/forms';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { skip } from 'rxjs/operators';
import { pillars } from './pillars';
import { atLeastOneIsCheckedValidator } from '../onboarding/validators/atLeastOnIsChecked';

export const PILLARS = 'pillars';

@UntilDestroy()
@Component({
  selector: 'app-pillar-list',
  templateUrl: './pillar-list.component.html',
  styleUrls: ['./pillar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillarListComponent {
  form: FormGroup;
  pillars = pillars;
  pillarsLiteralMap = PillarsLiteralMap;
  controlKey = USER_ONBOARDING + '-' + PILLARS;
  @Input() selectable = false;
  @Input() descriptions = false;

  get subForm() {
    return this.form;
  }

  get pillarsFormArray() {
    return this.form.get(PILLARS) as FormArray;
  }

  get selectedPillars() {
    return this.form.value.pillars
      .map((checked, i) => (checked ? Array.from(this.pillarsLiteralMap.keys())[i] : null))
      .filter((v) => v !== null);
  }

  constructor(
    private onboardingService: OnboardingService,
    private storage: StorageServiceService
  ) {
    this.form = new FormGroup({ [PILLARS]: new FormArray([], atLeastOneIsCheckedValidator()) });

    this.initForm();
  }

  initForm() {
    this.onboardingService.addCheckboxes(
      Array.from(this.pillarsLiteralMap.keys()),
      this.pillarsFormArray
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
          this.form.patchValue({ [PILLARS]: cacheValue });
        }
      });
  }

  subscribeToValueChanges() {
    this.form.valueChanges.pipe(skip(1), untilDestroyed(this)).subscribe((value) => {
      if (this.form.valid) {
        this.storage.setItemSubscribe(this.controlKey, value[PILLARS]);
      }
    });
  }
}
