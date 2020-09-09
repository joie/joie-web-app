import {
  StorageServiceService,
  USER_ONBOARDING,
} from './../onboarding/shared/storage-service.service';
import { StudentOnboardingService } from './../onboarding/onboarding-student/service/student-onboarding.service';

import { FormGroup, FormArray } from '@angular/forms';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pillar } from '../sessions/models/session';
import { skip } from 'rxjs/operators';
import { pillars } from './pillars';

export const PILLARS = 'pillars';

@Component({
  selector: 'app-pillar-list',
  templateUrl: './pillar-list.component.html',
  styleUrls: ['./pillar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillarListComponent {
  form: FormGroup;
  pillars = pillars;
  pillarEnum = Pillar;
  controlKey = USER_ONBOARDING + '-' + PILLARS;
  @Input() selectable = false;
  @Input() descriptions = false;

  get subForm() {
    return this.form;
  }

  get pillarsFormArray() {
    return this.form.get(PILLARS) as FormArray;
  }

  get pillarKeys() {
    return Object.keys(this.pillarEnum);
  }

  get selectedPillars() {
    return this.form.value.pillars
      .map((checked, i) => (checked ? this.pillarKeys[i].toLowerCase() : null))
      .filter((v) => v !== null);
  }

  constructor(
    private onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {
    this.form = new FormGroup({ [PILLARS]: new FormArray([]) });
    this.onboardingService.addCheckboxes(this.pillarKeys, this.pillarsFormArray);

    // restoring cache in this way helps to render the pillars without waiting for storage and in case if no cache this works better
    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue({ [PILLARS]: cacheValue });
      }
    });

    this.form.valueChanges
      .pipe(skip(1)) //todo skiping 1 not to set same value to cache
      .subscribe((value) => {
        this.storage.setItemSubscribe(this.controlKey, value[PILLARS]);
      });
  }
}
