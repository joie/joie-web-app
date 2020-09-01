import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-step',
  templateUrl: './welcome-step.component.html',
  styleUrls: ['./welcome-step.component.scss'],
})
export class WelcomeStepComponent implements OnInit {
  displayName;
  constructor() {}

  ngOnInit(): void {
    this.displayName = history.state.displayName;
  }
}
