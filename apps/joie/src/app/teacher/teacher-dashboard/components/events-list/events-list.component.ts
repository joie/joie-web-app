import { TeacherEvent } from './../../../../models/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent implements OnInit {
  @Input() events: TeacherEvent[];
  constructor() {}

  ngOnInit(): void {}
}
