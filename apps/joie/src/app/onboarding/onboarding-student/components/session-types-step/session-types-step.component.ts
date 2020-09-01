import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../../validators/notMoreThanOneIsSelected';
import { SessionTypes } from '../../models/student';
import { StorageServiceService, USER_ONBOARDING } from '../../../shared/storage-service.service';
import { skip } from 'rxjs/operators';

export const SESSION_TYPES = 'sessionTypes';
@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent implements OnDestroy {
  formGroup: FormGroup;
  typesEnum = SessionTypes;
  formValueChanges$;

  get typeKeys() {
    return Object.keys(this.typesEnum);
  }

  get typesFormArray() {
    return this.formGroup.controls.sessionTypes as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder,
    public authService: AuthService,
    public onboardingService: StudentOnboardingService,
    private storage: StorageServiceService
  ) {
    this.formGroup = this._formBuilder.group({
      sessionTypes: new FormArray(
        [],
        [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });
    this.fillFormArray();

    //subscribe to value chan ges skip form init
    this.formValueChanges$ = this.formGroup.valueChanges
      .pipe(skip(this.typeKeys.length))
      .subscribe(() => this.storage.setItemSubscribe(USER_ONBOARDING, this.submit()));
  }
  ngOnDestroy(): void {
    this.formValueChanges$.unsubscribe();
  }

  fillFormArray() {
    this.storage.getItem(USER_ONBOARDING).subscribe((res) => {
      let pillarsFromCache = res ? res[SESSION_TYPES] : null;
      if (pillarsFromCache) {
        this.formGroup.controls[SESSION_TYPES].markAsTouched();
      }
      this.onboardingService.addCheckboxes(
        this.typeKeys,
        this.typesFormArray,
        this.typesEnum,
        pillarsFromCache
      );
    });
  }

  isValid() {
    return this.formGroup.valid;
  }
  submit() {
    const selectedTypes = this.formGroup.value.sessionTypes
      .map((checked, i) => (checked ? this.typesEnum[this.typeKeys[i]] : null))
      .filter((v) => v !== null);
    return { sessionTypes: selectedTypes };
  }

  finishOnboarding() {
    //todo implement
  }
}
