import { PillarListComponent, PILLARS } from '../../../../pillar-list/pillar-list.component';
import { Pillar } from '../../../../sessions/models/session';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { StudentOnboardingFormService } from '../../student-onboarding-form.service';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-pillar-step',
  templateUrl: './pillar-step.component.html',
  styleUrls: ['./pillar-step.component.scss'],
})
export class PillarStepComponent implements AfterViewInit {
  @ViewChild('pillarList') pillarList: PillarListComponent;
  pillarEnum = Pillar;

  get pillarKeys() {
    return Object.keys(Pillar);
  }

  constructor(private formService: StudentOnboardingFormService) {}

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
    this.formService.setControl([PILLARS, new FormGroup(selectedPillarsObj)]);
  }

  isValid() {
    return Object.keys(this.formService.form.get(PILLARS).value).length > 0;
  }
}
