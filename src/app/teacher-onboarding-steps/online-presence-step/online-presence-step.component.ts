import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-online-presence-step',
  templateUrl: './online-presence-step.component.html',
  styleUrls: ['./online-presence-step.component.scss'],
})
export class OnlinePresenceStepComponent {
  @Output() stepComplete = new EventEmitter(); //todo  type as step1 form data model interface
  formGroup: FormGroup;
  sessionTypesData = [
    { id: 1, type: 'On-demand session or a lecture' },
    { id: 2, type: 'On-demand course' },
    { id: 3, type: 'Live group session' },
    { id: 4, type: 'Live group course' },
    { id: 5, type: 'Live lecture' },
    { id: 6, type: 'Live 1:1 coaching' },
  ];
  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      teachingPortfolioUrlCtrl: ['', Validators.required],
      sessionTypesCtrl: new FormArray([]),
    });
    this.addCheckboxes();
  }

  collectSessionInfo(stepData) {
    this.stepComplete.next(stepData);
  }

  get sessionTypesFormArray() {
    return this.formGroup.controls.sessionTypesCtrl as FormArray;
  }

  private addCheckboxes() {
    this.sessionTypesData.forEach(() =>
      this.sessionTypesFormArray.push(new FormControl(false))
    );
  }

  getCheckboxListValue() {
    return this.formGroup.value.sessionTypesCtrl
      .map((checked, i) => (checked ? this.sessionTypesData[i].id : null))
      .filter((v) => v !== null);
  }
}
