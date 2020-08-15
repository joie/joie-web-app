import { ProfileService } from './../../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.scss'],
})
export class ProfileDeleteComponent implements OnInit {
  bullets = [
    'You will no longer be able to login',
    'You will lose access lose access to your students.',
    ' But mostly, you will be missed',
  ]; //todo :CloseAccBullets
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  handleCloseAccount() {
    this.profileService.closeAccount();
  }

  handleContactSupport() {
    this.profileService.contactSupport();
  }
}
