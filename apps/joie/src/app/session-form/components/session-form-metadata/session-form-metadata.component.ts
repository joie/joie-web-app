import { Component, OnInit } from '@angular/core';
import { SessionFormService } from '../../services/session-form.service';
import { SessionType } from '../../../sessions/models/session';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-form-metadata',
  templateUrl: './session-form-metadata.component.html',
  styleUrls: ['./session-form-metadata.component.scss'],
})
export class SessionFormMetadataComponent implements OnInit {
  sessionTypes = [
    { value: SessionType.Class, name: 'Class' },
    { value: SessionType.Workshop, name: 'Workshop' },
    { value: SessionType.Course, name: 'Course' },
    { value: SessionType.Lecture, name: 'Lecture' },
    { value: SessionType.Coaching, name: '1:1 Coaching' },
  ];

  constructor(private sessionFormService: SessionFormService) {
    this.sessionForm.addControl('type', new FormControl(null, Validators.required));
    this.sessionForm.addControl('description', new FormControl(null));
  }

  get sessionForm() {
    return this.sessionFormService.sessionForm;
  }

  ngOnInit(): void {}
}
