import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ControlTuple,
  SessionFormService,
} from '../../services/session-form.service';

@Component({
  template: '',
})
export class SessionFormExtenderComponent implements OnInit, OnDestroy {
  protected controls: ControlTuple[];

  constructor(
    // as described in https://angular.io/guide/dependency-injection-in-action#keep-constructors-simple
    // Unfortunately, Angular cannot inject the service directly into the base class. You must provide
    // the service again for this component, then pass it down to the base class inside the constructor.
    private sessionFormService: SessionFormService
  ) {}

  get form(): FormGroup {
    return this.sessionFormService.sessionForm;
  }

  ngOnInit(): void {
    this.sessionFormService.addControls(this.controls);
  }

  ngOnDestroy(): void {
    this.sessionFormService.removeControls(this.controls);
  }
}
