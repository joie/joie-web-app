import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentOnboardingService {
  constructor() {}

  skipOnboarding() {
    console.log('saving data and skipping onvoarding here');
  }
}
