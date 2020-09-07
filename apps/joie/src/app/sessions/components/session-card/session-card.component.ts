import { Component, OnInit, Input } from '@angular/core';
import { SessionInfo } from '../../models';

@Component({
  selector: 'app-session-card',
  templateUrl: 'session-card.component.html',
  styleUrls: ['session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input() session: SessionInfo;
  @Input() showThumbnail = false;

  constructor() {}

  ngOnInit() {}
}
