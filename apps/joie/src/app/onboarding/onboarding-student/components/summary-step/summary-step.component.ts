import { Preferences } from './../../models/student';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss'],
})
export class SummaryStepComponent {
  student: Preferences;
  displayName;

  constructor(public activatedRoute: ActivatedRoute) {
    this.student = history.state.student;
    this.displayName = history.state.displayName;
  }

  submitData() {
    // todo create api service for this purpose and call it here
  }
}
