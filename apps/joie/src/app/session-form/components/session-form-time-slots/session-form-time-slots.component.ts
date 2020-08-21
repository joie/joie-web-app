import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SessionFormExtenderComponent } from '../../common/session-form-extender/session-form-extender.component';
import { SessionFormService } from '../../services/session-form.service';

@Component({
  selector: 'app-session-form-time-slots',
  templateUrl: './session-form-time-slots.component.html',
  styleUrls: ['./session-form-time-slots.component.scss'],
})
export class SessionFormTimeSlotsComponent extends SessionFormExtenderComponent {
  myFilter(d: Date | null): boolean {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(sessionFormService: SessionFormService) {
    super(sessionFormService);
    this.controls = [['time-slot', new FormControl(null)]];
  }
}
