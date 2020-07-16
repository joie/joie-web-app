import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-why-joie-step',
  templateUrl: './why-joie-step.component.html',
  styleUrls: ['./why-joie-step.component.scss'],
})
export class WhyJoieStepComponent implements OnInit {
  @Input() teachersName;
  @Output() stepperComplete = new EventEmitter();
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  submitFormsData(stepData): void {
    this.stepperComplete.next(stepData);
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      addedValDescriptionCtrl: ['', Validators.required],
    });
  }
}
