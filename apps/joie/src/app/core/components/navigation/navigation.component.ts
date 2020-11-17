import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  links = [
    { name: 'home', path: ['/', 'home'] },
    // { name: 'posts', path: ['/', 'posts'] },
    // { name: 'author', path: ['/', 'author'] },
    { name: 'account', path: ['/', 'account'] },
    { name: 'sessions', path: ['/', 'sessions'] },
    { name: 'contact', path: ['/', 'contact'] },
    { name: 'Join as a teacher', path: ['/', 'onboarding', 'teacher'] },
    { name: 'onboarding/student', path: ['/', 'onboarding', 'student'] },
    { name: 'mission', path: ['/', 'mission'] },
    { name: 'how it works', path: ['/', 'how-it-works'] },
    { name: 'terms & conditions', path: ['/', 'terms-and-conditions'] },

    // { name: 'teacher', path: ['/', 'teacher'] },
  ];
  activeLink = this.links[0];
}
