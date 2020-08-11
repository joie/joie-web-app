import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { TeacherEvent } from '../../../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() cdkCopyToClipboard: string;
  @Input() session;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  handleEdit() {
    this.router.navigate(['teacher', 'sessions'], {
      state: { action: 'edit', session: this.session }, //TODO the event interface is just a part pf a session
    });
    //todo open dialog to edit the whole event, on submit use facade service
  }
}
