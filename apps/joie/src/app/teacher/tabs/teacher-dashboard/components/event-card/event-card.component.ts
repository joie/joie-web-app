import { Component, OnInit, Input } from '@angular/core';
import { TeacherEvent } from '../../../../teacher.interfaces';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() event: TeacherEvent;
  constructor() {}
  // todo message/edit button handlers
  //icon for copying url
  ngOnInit(): void {}
}
