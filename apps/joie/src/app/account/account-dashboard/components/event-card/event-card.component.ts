import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() cdkCopyToClipboard: string;
  @Input() session;
  constructor(private router: Router) {}
}
