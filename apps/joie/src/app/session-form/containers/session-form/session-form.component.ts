import { Component, OnDestroy } from '@angular/core';
import { SessionFormat } from './../../../sessions/models/session';
import { SessionType } from '../../../sessions/models/session';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src/lib/dyna-form-base.component';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss'],
})
export class SessionFormComponent extends DynaFormBaseComponent {
  layoutClass = 'layout-grid layout-spacing-block-sm';
  showAllFields: boolean;

  get isCoaching() {
    return SessionType[this.getFormControl('type').value] === SessionType.coaching;
  }

  get isLivestreaming() {
    return this.getFormControl('format').value === SessionFormat.liveStreaming;
  }

  get isCourse() {
    return SessionType[this.getFormControl('type').value] === SessionType.course;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}