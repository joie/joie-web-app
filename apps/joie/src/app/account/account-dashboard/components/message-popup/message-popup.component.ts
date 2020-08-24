import { ProfileService } from './../../../profile.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss'],
})
export class MessagePopupComponent implements OnInit {
  message = '';
  constructor(
    private router: Router,
    private matDialogRef: MatDialogRef<MessagePopupComponent>,
    private accountService: ProfileService
  ) {}
  ngOnInit(): void {
    this.matDialogRef
      .afterClosed()
      .subscribe(() =>
        this.router.navigate(['/teacher', 'dashboard', { outlets: { ['popup']: null } }])
      );
  }

  sendMessage() {
    this.accountService.postMessage('user123', history.state.session, this.message);
  }
}
