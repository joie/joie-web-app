import { get } from 'lodash';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormArray, Validators } from '@angular/forms';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-form-marketing',
  templateUrl: './session-form-marketing.component.html',
  styleUrls: ['./session-form-marketing.component.scss'],
})
export class SessionFormMarketingComponent extends DynaFormBaseComponent implements OnInit {
  readonly relatedSessionsArray = new FormArray([]);
  readonly sfiValidators = [
    Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { session$: Observable<any> }
  ) {
    super();
    this.addControls([
      ['promo', new FormControl(null)],
      ['relatedSessions', this.relatedSessionsArray],
    ]);
  }

  ngOnInit() {
    if (get(this.data, 'session$', false)) {
      // edit mode
      this.data.session$.subscribe(session => {
        this.getFormControl('promo').setValue(session.promo);

        if (session.relatedSessions.length > 0) {
          session.relatedSessions.map(relatedSession => {
            this.addRelatedSession(relatedSession);
          });
        }
      });
    }
  }

  sessionsArrayValues() {
    return this.relatedSessionsArray.controls.map(({ value }) => value);
  }

  addRelatedSession(value: string) {
    if (!value) {
      return;
    }
    this.relatedSessionsArray.push(new FormControl(value));
  }

  removeControl(i: number) {
    this.relatedSessionsArray.removeAt(i);
  }
}
