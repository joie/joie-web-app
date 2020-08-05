import { Profile } from './../models/profile';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Form,
} from '@angular/forms';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'joie-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss'],
})
export class TeacherProfileComponent implements OnInit {
  @ViewChild('form') form: Form;
  profileData: Profile = null; //todo -> @input()
  profile: Profile = {
    name: '',
    email: '',
    password: '',
    timezone: '',
  };
  bullets = [
    'You will no longer be able to login',
    'You will lose access lose access to your students.',
    ' But mostly, you will be missed',
  ];
  constructor() {}

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
}
