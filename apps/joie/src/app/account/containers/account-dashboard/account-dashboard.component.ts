import { Component } from '@angular/core';
import { AuthFacade } from 'src/app/auth-state/+state/auth/facades/auth.facade';
import { User } from 'src/app/auth-state/+state/auth/models/auth.models';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss'],
})
export class AccountDashboardComponent {
  user$: Observable<User>;

  constructor(private authFacade: AuthFacade) {
    this.user$ = this.authFacade.user$;
  }
}
