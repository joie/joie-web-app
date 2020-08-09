import { Component, OnInit, Input } from '@angular/core';
import { TeacherEvent } from '../../../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() cdkCopyToClipboard: string;
  @Input() event: TeacherEvent;
  constructor() {}
  //icon for copying url
  ngOnInit(): void {}

  handleMessage() {
    // todo
    // open  dialog form to create message, on submit use this.facadeService.postMessage(id, event, message)
  }

  handleEditBtn() {
    //todo open dialog to edit the whole event, on submit use facade service
  }
}
