import { Component, Input } from '@angular/core';
import { Session, Pillar, PillarsIconsMap } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-session-card',
  templateUrl: 'session-card.component.html',
  styleUrls: ['session-card.component.scss'],
})
export class SessionCardComponent {
  @Input() session: Session;
  @Input() sessionId: string;
  @Input() showThumbnail = false;

  pillar = Pillar;
  pillarIcons = PillarsIconsMap;
}
