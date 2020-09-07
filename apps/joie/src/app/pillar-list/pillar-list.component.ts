import {
  StorageServiceService,
  USER_ONBOARDING,
} from './../onboarding/shared/storage-service.service';
import { StudentOnboardingService } from './../onboarding/onboarding-student/service/student-onboarding.service';

import { FormGroup, FormArray } from '@angular/forms';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PillarKeywordEmphasisPipe } from '../home/pipes/pillar-keyword-emphasis/pillar-keyword-emphasis.pipe';
import { Pillar } from '../sessions/models/session';
const pillars = [
  {
    imgUrl: '/assets/images/movement.png',
    title: Pillar.movement,
    description: 'Exercise, Energy, Diet, and Nutrition.',
  },
  {
    imgUrl: '/assets/images/emotions.png',
    title: Pillar.emotions,
    description: 'Self-Regulation, Self-care, Relaxation, Stress Reduction, and Inner Strength.',
  },
  {
    imgUrl: '/assets/images/connections.png',
    title: Pillar.connections,
    description: 'Social interactions, Friendships, Parenting, and Relationships.',
  },
  {
    imgUrl: '/assets/images/spirit.png',
    title: Pillar.spirit,
    description: 'Seek Meaning, Individual Purpose, Faith, Values, Ethics and Morals.',
  },
  {
    imgUrl: '/assets/images/professional.png',
    title: Pillar.professional,
    description: 'Satisfaction at Work, Professional Development, and Financial Stability.',
  },
];

export const PILLARS = 'pillars';

@Component({
  selector: 'app-pillar-list',
  templateUrl: './pillar-list.component.html',
  styleUrls: ['./pillar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PillarKeywordEmphasisPipe],
})
export class PillarListComponent {
  form: FormGroup;
  pillars = pillars;
  pillarEnum = Pillar;
  controlKey = USER_ONBOARDING + '-' + PILLARS;
  @Input() selectable = false;
  @Input() descriptions = false;
  @Input() layoutClass;

  get subForm() {
    return this.form;
  }

  get pillarsFormArray() {
    return this.form.get(PILLARS);
  }

  get pillarKeys() {
    return Object.keys(this.pillarEnum);
  }

  get selectedPillars() {
    return this.form.value.pillars
      .map((checked, i) => (checked ? this.pillarKeys[i] : null))
      .filter((v) => v !== null);
  }

  constructor(
    private onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {
    this.form = new FormGroup({ [PILLARS]: new FormArray([]) });
    this.onboardingService.addCheckboxes(
      this.pillarKeys,
      this.pillarsFormArray,
      this.pillarEnum,
      null //last param for cached values
    );

    // restoring cache in this way helps to render the pillars without waiting for storage and in case if no cache this works better
    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        this.form.patchValue({ [PILLARS]: cacheValue });
      }
    });

    this.form.valueChanges.subscribe((value) => {
      this.storage.setItemSubscribe(this.controlKey, value[PILLARS]);
    });
  }
}
