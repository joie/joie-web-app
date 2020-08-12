import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() cdkCopyToClipboard: string;
  @Input() session;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  handleEdit() {
    this.router.navigate(['teacher', 'sessions'], {
      state: { action: 'edit', session: this.session },
    });
  }
}
