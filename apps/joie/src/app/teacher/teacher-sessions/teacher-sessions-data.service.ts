import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherSessionsDataService {
  constructor(private httpClient: HttpClient) {}

  submitSession(id, session) {
    return null;
  }
  getDraft() {
    // todo probably get from cookies, not sure yet
    return null;
  }
}
