import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

import { Activities, Pillar, Format } from '../../../../../../../libs/schemes/src';
import { SessionTypeLiteralsMap } from '../../../sessions/literal-maps/session-type.map';

@Component({
  selector: 'app-account-teacher-info',
  templateUrl: './account-teacher-info.component.html',
  styleUrls: ['./account-teacher-info.component.scss']
})
export class AccountTeacherInfoComponent implements OnInit {
  @ViewChild('teacherform') teacherform: Form;
  activityEnum = Activities;
  pillarEnum = Pillar;
  formatEnum = Format;
  sessionTypeLiteralMap = SessionTypeLiteralsMap;


  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event) {}

  get activityKeys(): Array<string> {
    return Object.keys(this.activityEnum);
  }

  get pillarKeys(): Array<string> {
    return Object.keys(this.pillarEnum);
  }

  get formatKeys(): Array<string> {
    return Object.keys(this.formatEnum);
  }

  asIsOrder(a, b) {
    return 1;
  }
}
