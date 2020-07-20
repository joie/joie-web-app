import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-why-joie-step',
  templateUrl: './why-joie-step.component.html',
  styleUrls: ['./why-joie-step.component.scss'],
})
export class WhyJoieStepComponent {
  @Input() teachersName;
  @Output() stepperComplete = new EventEmitter();
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      addedValDescriptionCtrl: [
        '',
        [Validators.required, Validators.minLength(100)],
      ],
    });
  }

  submitFormsData(stepData): void {
    this.stepperComplete.next(stepData);
  }
}
