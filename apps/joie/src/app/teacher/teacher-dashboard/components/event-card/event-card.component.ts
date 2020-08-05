import { Component, OnInit, Input } from '@angular/core';
import { TeacherEvent } from '../../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() cdkCopyToClipboard: string;
  @Input() event: TeacherEvent;
  constructor() {}
  // todo message/edit button handlers
  //icon for copying url
  ngOnInit(): void {}

  handleMessage() {
    // todo implement handlers
  }

  handleEditBtn() {}
}
