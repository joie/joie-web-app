import { AuthService } from './../../../auth-state/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
})
export class AccountHeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.state$.subscribe((d) => console.log(d));
  }
}
