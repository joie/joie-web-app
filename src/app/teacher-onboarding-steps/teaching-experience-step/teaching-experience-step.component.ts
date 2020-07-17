import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teaching-experience-step',
  templateUrl: './teaching-experience-step.component.html',
  styleUrls: ['./teaching-experience-step.component.scss'],
})
export class TeachingExperienceStepComponent implements OnInit {
  @Input() teachersName;
  @Output() stepComplete = new EventEmitter(); //todo  type as step1 form data model interface
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  collectTeachingExperienceInfo(stepData) {
    this.stepComplete.next(stepData);
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      teachingExpCtrl: ['', Validators.required],
    });
  }
}
