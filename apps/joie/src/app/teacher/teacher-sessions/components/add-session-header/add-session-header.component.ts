import { CANCEL, SUBMIT } from '../../teacher-sessions.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SAVE_DRAFT } from '../../teacher-sessions.component';

@Component({
  selector: 'app-add-session-header',
  templateUrl: './add-session-header.component.html',
  styleUrls: ['./add-session-header.component.scss'],
})
export class AddSessionHeaderComponent implements OnInit {
  @Output() onHeaderToggle = new EventEmitter();
  isActive: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  toggle() {
    this.isActive = !this.isActive;
    return this.isActive;
  }

  addSession() {
    this.toggle();

    this.router.navigate(['add'], {
      relativeTo: this.route,
    });
    this.onHeaderToggle.emit(this.toggle());
  }

  cancelAdding() {
    this.toggle();
    this.router.navigate(['list'], {
      relativeTo: this.route,
      state: { operation: CANCEL },
    });
    this.onHeaderToggle.emit(this.toggle());
  }

  saveFormDraft() {
    // todo leaving this handler yet without validation for testing purposes
    this.toggle();
    this.router.navigate(['list'], {
      relativeTo: this.route,
      state: { operation: SAVE_DRAFT },
    });
    this.onHeaderToggle.emit(this.toggle());
  }

  submitSession() {
    this.toggle();
    this.router.navigate(['list'], {
      relativeTo: this.route,
      state: { operation: SUBMIT },
    });
  }

  ngOnInit(): void {}
}
