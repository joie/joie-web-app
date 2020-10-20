import {
  PillarListComponent,
  PILLARS,
} from '../../../../pillar-list/components/pillar-list/pillar-list.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { StudentOnboardingFormService } from '../../student-onboarding-form.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { OnboardingService } from '../../../shared/onboarding.service';

@UntilDestroy()
@Component({
  selector: 'app-pillar-step',
  templateUrl: './pillar-step.component.html',
  styleUrls: ['./pillar-step.component.scss'],
})
export class PillarStepComponent implements AfterViewInit {
  @ViewChild('pillarList') pillarList: PillarListComponent;

  constructor(
    private formService: StudentOnboardingFormService,
    public onboardingService: OnboardingService
  ) {}

  ngAfterViewInit(): void {
    this.pillarList.form.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      this.setControls(this.pillarList.selectedPillars);
    });
  }

  setControls(controls) {
    const selectedPillarsObj = {};
    controls.forEach((pillar) =>
      Object.assign(selectedPillarsObj, { [pillar]: new FormArray([]) })
    );
    this.formService.setControl([PILLARS, new FormGroup(selectedPillarsObj)]);
  }

  isValid() {
    return this.pillarList
      ? this.pillarList.subForm.valid
      : Object.keys(this.formService.form.get(PILLARS).value).length > 0;
  }
}
