import { CourseType } from './../../../sessions/models/session';
import { Component, OnInit } from '@angular/core';
import { SessionFormService } from '../../services/session-form.service';
import { SessionType } from '../../../sessions/models/session';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss'],
})
export class SessionFormComponent implements OnInit {
  layoutClass = 'layout-grid layout-spacing-block-sm';
  showAllFields: boolean;

  constructor(private sessionFormService: SessionFormService) {}

  get sessionForm() {
    return this.sessionFormService.sessionForm;
  }

  get isCoaching() {
    return (
      this.sessionFormService.getControl('type') ===
      SessionType.Coaching.toLowerCase()
    );
  }

  get isLivestreaming() {
    return (
      this.sessionFormService.getControl('format') ===
      CourseType.LiveStreaming.toLowerCase()
    );
  }

  ngOnInit(): void {}

  log() {
    console.log(this.sessionForm.value);
  }
}
