import { Component, Inject, OnInit } from '@angular/core';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src';
import { FormControl } from '@angular/forms';
import { get } from 'lodash';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Session } from '../../../sessions/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-form-repetitions',
  templateUrl: './session-form-repetitions.component.html',
  styleUrls: ['./session-form-repetitions.component.scss'],
})
export class SessionFormRepetitionsComponent extends DynaFormBaseComponent implements OnInit {
  REPETIOTIONS = 'repetitions';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { session$: Observable<Session> }
  ) {
    super();
    this.addControls([[this.REPETIOTIONS, new FormControl(null)]]);
  }

  ngOnInit(): void {
    if (get(this.data, 'session$', false)) {
      this.data.session$.subscribe(session => {
        if (session[this.REPETIOTIONS] ) {
          this.getFormControl(this.REPETIOTIONS).setValue(session[this.REPETIOTIONS]);
        }
      });
    }
  }
}
