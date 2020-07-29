import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../models';

@Component({
  selector: 'joie-session-card',
  templateUrl: 'session-card.component.html',
  styleUrls: ['session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input() session: Session;
  @Input() showThumbnail = false;

  constructor() {}

  ngOnInit() {}
}
