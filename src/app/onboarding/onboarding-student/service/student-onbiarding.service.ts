import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentOnbiardingService {
  constructor() {}

  skipOnboarding() {
    console.log('saving data and skipping onvoarding here');
  }
}
