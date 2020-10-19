import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../models';
import { Pillar } from '../../../enums/pillar.enum';

@Component({
  selector: 'app-session-card',
  templateUrl: 'session-card.component.html',
  styleUrls: ['session-card.component.scss'],
})
export class SessionCardComponent implements OnInit {
  @Input() session: Session;
  @Input() showThumbnail = false;

  pillars = Pillar;

  constructor() {}

  ngOnInit() {}

}
