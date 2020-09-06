import { PillarListComponent, PILLARS } from './../../../../pillar-list/pillar-list.component';
import { Pillar } from '../../../../sessions/models/session';
import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
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

  log() {
    console.log(this.onboardingFormService.form);
  }

  isValid() {
    return Object.keys(this.onboardingFormService.form.value.pillars).length > 0; // todo for now
    // return this.formGroup.valid;
  }
}
