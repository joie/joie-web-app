import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  @ViewChild('form') form: Form;
  profileData: Profile = null;
  profile: Profile = {
    name: '',
    email: '',
    password: '',
    timezone: '',
  };
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileData = {
      name: 'raja ram',
      email: 'raja@tip.goa',
      password: 'kirimbo124',
      timezone: '(GMT +5:30 hours) Goa, India',
    }; // came from input or fetched right here
    Object.keys(this.profileData).forEach((key) => {
      this.profile[key] = this.profileData[key];
    });
  }
  handleSendResetEmail() {}

  submitProfileChanges() {
    this.profileService.submitProfileChanges();
  }
}
