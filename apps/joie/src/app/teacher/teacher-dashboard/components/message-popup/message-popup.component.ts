import { Component } from '@angular/core';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss'],
})
export class MessagePopupComponent {
  message = '';
  constructor() {}

  sendMessage() {
    // todo add function to service facadeService.send(this.message)
  }
}
