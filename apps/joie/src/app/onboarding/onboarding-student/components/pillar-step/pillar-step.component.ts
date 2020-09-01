import { skip } from 'rxjs/operators';
import { Pillar } from '../../../../sessions/models/session';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';

export const PILLARS = 'pillars';
@Component({
  selector: 'app-pillar-step',
  templateUrl: './pillar-step.component.html',
  styleUrls: ['./pillar-step.component.scss'],
})
export class PillarStepComponent {
  formGroup: FormGroup;
  pillarEnum = Pillar;

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
    // onboardingService.addCheckboxes(this.pillarKeys, this.pillarFormArray, this.pillarEnum);
    this.fillFormArray();

    //subscribe to value chan ges skip form init
    this.formGroup.valueChanges
      .pipe(skip(this.pillarKeys.length))
      .subscribe(() => this.storage.setItemSubscribe(USER_ONBOARDING, this.submit()));
  }

  fillFormArray() {
    this.storage.getItem(USER_ONBOARDING).subscribe((res) => {
      if (res && res[PILLARS]) {
        this.formGroup.controls[PILLARS].markAsTouched();
        // this.addPillarCheckboxesFromCache(res[PILLARS]);
        this.onboardingService.addCheckboxes(
          this.pillarKeys,
          this.pillarFormArray,
          this.pillarEnum,
          res[PILLARS]
        );
      } else {
        // this.addPillarCheckboxes();
        this.onboardingService.addCheckboxes(
          this.pillarKeys,
          this.pillarFormArray,
          this.pillarEnum,
          null
        );
      }
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

  private addPillarCheckboxes() {
    this.pillarKeys.forEach(() => this.pillarFormArray.push(new FormControl('dick')));
  }

  private addPillarCheckboxesFromCache(pillars) {
    this.pillarKeys.forEach((key) => {
      if (pillars.includes(this.pillarEnum[key])) {
        this.pillarFormArray.push(new FormControl(true));
      } else {
        this.pillarFormArray.push(new FormControl(false));
      }
    });
  }
}
