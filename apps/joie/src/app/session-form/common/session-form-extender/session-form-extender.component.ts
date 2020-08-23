import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlTuple, SessionFormService } from '../../services/session-form.service';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SessionFormExtenderComponent implements OnInit, OnDestroy {
  private _controls: ControlTuple[];

  constructor(
    // as described in https://angular.io/guide/dependency-injection-in-action#keep-constructors-simple
    // Unfortunately, Angular cannot inject the service directly into the base class. You must provide
    // the service again for this component, then pass it down to the base class inside the constructor.
    private sessionFormService: SessionFormService
  ) {}

  protected addFormControls(controls: ControlTuple[]) {
    this.sessionFormService.addControls(controls);
  }

  get form(): FormGroup {
    return this.sessionFormService.sessionForm;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sessionFormService.removeControls(this._controls);
  }
}
