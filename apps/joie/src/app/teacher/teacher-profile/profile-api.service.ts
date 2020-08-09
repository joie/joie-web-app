import { Profile } from './../../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileApiService {
  constructor(private httpClient: HttpClient) {}

  getProfileData(id: string): Profile {
    return;
  }
}
