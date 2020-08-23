import { Component } from '@angular/core';
import { SessionFormService } from '../../services/session-form.service';
import { CourseType } from './../../../sessions/models/session';
import { SessionType } from '../../../sessions/models/session';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss'],
})
export class SessionFormComponent {
  layoutClass = 'layout-grid layout-spacing-block-sm';
  showAllFields: boolean;

  constructor(private sessionFormService: SessionFormService) {}

  get sessionForm() {
    return this.sessionFormService.sessionForm;
  }

  get isCoaching() {
    return SessionType[this.sessionFormService.getControl('type')] === SessionType.coaching;
  }

  get isLivestreaming() {
    return this.sessionFormService.getControl('format') == CourseType.liveStreaming;
  }

  get isCourse() {
    return SessionType[this.sessionFormService.getControl('type')] == SessionType.course;
  }
}
