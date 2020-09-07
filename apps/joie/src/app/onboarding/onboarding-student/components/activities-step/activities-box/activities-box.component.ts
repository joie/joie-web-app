import {
  Pillar,
  JoieMovement,
  JoieEmotions,
  JoieConnections,
  JoieProfessional,
  JoieSpirit,
} from '../../../../../sessions/models/session';
import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { atLeastOneIsCheckedValidator } from '../../../../validators/atLeastOnIsChecked';
import { StorageServiceService, USER_ONBOARDING } from '../../../../shared/storage-service.service';
import { StudentOnboardingService } from '../../../service/student-onboarding.service';
import { StudentOnboardingFormService } from '../../../student-onboarding-form.service';
import { PILLARS } from '../../../../../pillar-list/pillar-list.component';
import { skip } from 'rxjs/operators';

export const ACTIVITIES = 'activities';
@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.scss'],
})
export class ActivitiesBoxComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() pillar;
  public form: FormGroup;
  formValueChanges$;
  pillarEnum = Pillar;
  controlKey;

  get activitiesEnum() {
    switch (this.pillarEnum[this.pillar]) {
      case Pillar.movement:
        return JoieMovement;
      case Pillar.emotions:
        return JoieEmotions;
      case Pillar.connections:
        return JoieConnections;
      case Pillar.professional:
        return JoieProfessional;
      case Pillar.spirit:
        return JoieSpirit;
    }
  }

  get activityKeys() {
    return Object.keys(this.activitiesEnum);
  }

  get activitiesFormArray() {
    return this.form.controls[this.pillar] as FormArray;
  }

  get subForm() {
    return this.form;
  }

  constructor(
    private formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService,
    private formService: StudentOnboardingFormService
  ) {
    // this.form = this.formBuilder.group({
    //   activities: new FormArray([], [atLeastOneIsCheckedValidator()]),
    // });

    // this.storage.getItem(USER_ONBOARDING + '-' + PILLARS).subscribe((cachedVal) => {
    //   if (cachedVal && cachedVal) {
    //     console.log(cachedVal); //gettin cache here
    //   }
    // });
    console.log('pillar', this.pillar);
  }

  ngOnInit(): void {
    console.log('pillar', this.pillar);
    this.form = this.formBuilder.group({
      [this.pillar]: new FormArray([], [atLeastOneIsCheckedValidator()]),
    });

    /// add this.formva.ue.acitivitues tto last patram mayhbe it works
    this.onboardingService.addCheckboxes(
      this.activityKeys,
      this.activitiesFormArray,
      this.activitiesEnum,
      null // form values in format string[]
    );

    this.controlKey = USER_ONBOARDING + '-' + PILLARS + '-' + this.pillar;

    this.storage.getItem(this.controlKey).subscribe((cacheValue) => {
      if (cacheValue) {
        console.log('value gets patched by following cache: ', cacheValue);
        this.activitiesFormArray.setValue(cacheValue);
      }
    });
  }

  ngAfterViewInit(): void {
    this.formValueChanges$ = this.form.valueChanges
      .pipe(skip(1)) //todo skiping patching with cache change
      .subscribe((changedVal) => {
        console.log('change occures', changedVal);
        this.storage.setItemSubscribe(this.controlKey, changedVal[this.pillar]);
      });
    console.log(this.form.value[this.pillar]);
  }
  ngOnDestroy(): void {
    // this.formValueChanges$.unsubscribe();
  }
  // this.formValueChanges$ = this.form.valueChanges
  //   // .pipe(skip(this.activityKeys.length)) //todo +
  //   .subscribe((changedVal) => {
  //     this.storage.setItemSubscribe(this.controlKey, changedVal[this.pillar]);
  //   });

  // this.formValueChanges$ = this.formGroup.valueChanges
  //   .pipe(skip(this.activityKeys.length))
  //   .subscribe(() =>
  //     this.storage.setItemSubscribe(USER_ONBOARDING, { activities: this.submit() })
  //   );
  // this.fillFormArray();

  // fillFormArray() {
  //   this.storage.getItem(USER_ONBOARDING).subscribe((res) => {
  //     let activitiesFromCache = res ? res[ACTIVITIES] : null;
  //     if (activitiesFromCache) {
  //       this.formGroup.controls[ACTIVITIES].markAsTouched();
  //     }
  //     this.onboardingService.addCheckboxes(
  //       this.activityKeys,
  //       this.activitiesFormArray,
  //       this.activitiesEnum,
  //       activitiesFromCache
  //     );
  //   });
  // }

  submit() {
    const selectedActivityTitles = this.form.value[this.pillar]
      .map((selected, i) => (selected ? this.activitiesEnum[this.activityKeys[i]] : null))
      .filter((v) => v !== null);
    return selectedActivityTitles;
  }

  handleSelect(index, selected) {
    if (selected) {
      this.activitiesFormArray.controls[index].patchValue(true);
    } else {
      this.activitiesFormArray.controls[index].patchValue(false);
    }
  }
}
