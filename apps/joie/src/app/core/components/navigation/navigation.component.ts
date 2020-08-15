import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  links = [
    'home',
    'posts',
    'author',
    'account',
    'sessions',
    'contact',
    '/onboarding/teacher',
    '/onboarding/student',
    '/teacher',
  ];
  activeLink = this.links[0];
}
