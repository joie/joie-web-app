import { Component, OnInit } from '@angular/core';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form/src';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-session-form-repetitions',
  templateUrl: './session-form-repetitions.component.html',
  styleUrls: ['./session-form-repetitions.component.scss'],
})
export class SessionFormRepetitionsComponent extends DynaFormBaseComponent implements OnInit {
  REPETIOTIONS = 'repetitions';

  constructor() {
    super();
    this.addControls([[this.REPETIOTIONS, new FormControl(null)]]);
  }

  ngOnInit(): void {}
}
