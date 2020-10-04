import { get } from 'lodash';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-form-date-time',
  templateUrl: './session-form-date-time.component.html',
  styleUrls: ['./session-form-date-time.component.scss'],
})
export class SessionFormDateTimeComponent extends DynaFormBaseComponent implements OnInit {
  WHEN = 'when';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { session$: Observable<any> }
  ) {
    super();

    this.addControls([[this.WHEN, new FormControl(null)]]);
  }

  ngOnInit() {
    if (get(this.data, 'session$', false)) {
      this.data.session$.subscribe(session => {
        console.log('session: ', session)
        if (session.timeSlots && session.timeSlots.length > 0) {
          this.getFormControl(this.WHEN).setValue(this.setDateTime(session.when));
        }
      });
    }
  }

  setDateTime(value: Date) {
    this.getFormControl(this.WHEN).patchValue(value);
  }
}
