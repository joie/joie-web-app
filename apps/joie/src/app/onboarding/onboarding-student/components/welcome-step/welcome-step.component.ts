import { AuthService } from './../../../../auth-state/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-step',
  templateUrl: './welcome-step.component.html',
  styleUrls: ['./welcome-step.component.scss'],
})
export class WelcomeStepComponent {
  constructor(public authService: AuthService) {}
}
