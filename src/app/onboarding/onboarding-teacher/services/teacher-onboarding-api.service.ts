import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeacherOnboardingApiService {
  constructor(private httpClient: HttpClient) {}

  submitTeacherAccountData(teacherData) {
    const url = '/dummyurl';
    return this.httpClient.post(url, teacherData);
  }
}
