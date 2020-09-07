import { PillarListComponent, PILLARS } from './../../../../pillar-list/pillar-list.component';
import { Pillar } from '../../../../sessions/models/session';
import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { StudentOnboardingFormService } from '../../student-onboarding-form.service';

@Component({
  selector: 'app-pillar-step',
  templateUrl: './pillar-step.component.html',
  styleUrls: ['./pillar-step.component.scss'],
})
export class PillarStepComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pillarList') pillarList: PillarListComponent;
  pillarEnum = Pillar;
  formValueChanges$;

  get pillarKeys() {
    return Object.keys(Pillar);
  }

  constructor(
    public onboardingService: StudentOnboardingService,
    private onboardingFormService: StudentOnboardingFormService
  ) {}
  ngAfterViewInit(): void {
    this.pillarList.form.valueChanges.subscribe(() => {
      this.setControls(this.pillarList.selectedPillars);
    });
  }

  setControls(controls) {
    let selectedPillarsObj = {};
    controls.forEach((pillar) =>
      Object.assign(selectedPillarsObj, { [pillar]: new FormArray([]) })
    );
    this.onboardingFormService.setControl([PILLARS, new FormGroup(selectedPillarsObj)]);
  }

  ngOnDestroy(): void {
    // this.formValueChanges$.unsubscribe();
  }

  isValid() {
    return Object.keys(this.onboardingFormService.form.get(PILLARS).value).length > 0;
  }
}
