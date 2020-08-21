import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
      SessionType[this.sessionFormService.getControl('type')] ===
      SessionType.coaching
    );
  }

  ngOnInit(): void {}
}
