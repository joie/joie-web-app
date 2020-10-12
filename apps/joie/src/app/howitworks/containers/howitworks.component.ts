import { Component } from '@angular/core';
import { sessionsFeatures } from './sessions-features';
import { signUpFeatures } from './sign-up-features';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.scss'],
})
export class HowitworksComponent {
  signUpFeatures = signUpFeatures;
  sessionsFeatures = sessionsFeatures;
}
