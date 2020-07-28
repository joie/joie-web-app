import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { StudentOnboardingService } from '../../service/student-onboarding.service';
import { atLeastOneIsCheckedValidator } from '../../validators/atLeastOnIsChecked';
import { notMoreThanOneIsCheckedValidator } from '../../validators/notMoreThanOneIsSelected';
@Component({
  selector: 'app-session-types-step',
  templateUrl: './session-types-step.component.html',
  styleUrls: ['./session-types-step.component.scss'],
})
export class SessionTypesStepComponent implements OnInit {
  formGroup: FormGroup;
  sessionTypesData = [
    { sessionType: 'On-demand sessions', isChecked: false },
    { sessionType: 'Live streaming sessions', isChecked: false },
    { sessionType: '1:1 coaching sessions', isChecked: false },
  ];
  constructor(
    private _formBuilder: FormBuilder,
    public onboardingService: StudentOnboardingService
  ) {
    this.formGroup = this._formBuilder.group({
      sessionTypesCtrl: new FormArray(
        [],
        [atLeastOneIsCheckedValidator(), notMoreThanOneIsCheckedValidator()]
      ),
    });
    this.addCheckboxes();
  }
  ngOnInit(): void {}

  get sessionTypesArray() {
    return this.formGroup.controls.sessionTypesCtrl as FormArray;
  }

  entry(obj) {
    return Object.entries(obj)[0];
  }

  handleCheck(sessionType, isChecked, index) {
    this.sessionTypesArray.controls[index].patchValue({
      [sessionType]: !isChecked,
    });
  }

  private addCheckboxes() {
    this.sessionTypesData.forEach(({ sessionType, isChecked }) =>
      this.sessionTypesArray.push(new FormControl({ [sessionType]: isChecked }))
    );
  }
}
