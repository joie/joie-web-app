import { Component, Input } from '@angular/core';
import { Session } from '../../../../../../../../libs/schemes/src';
import { AuthFacade } from '../../../../auth/services/auth.facade';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
})
export class SessionCardComponent {
  @Input() session: Session;
  uid$ = this.authFacade.uid$;

  constructor(private authFacade: AuthFacade) {}
}
