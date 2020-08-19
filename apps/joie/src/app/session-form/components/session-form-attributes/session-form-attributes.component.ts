import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pillar } from '../../../sessions/models/session';
import { FormGroup, FormControl } from '@angular/forms';
import {
  SessionFormService,
  ControlTuple,
} from '../../services/session-form.service';

@Component({
  selector: 'app-session-form-attributes',
  templateUrl: './session-form-attributes.component.html',
  styleUrls: ['./session-form-attributes.component.scss'],
})
export class SessionFormAttributesComponent implements OnInit, OnDestroy {
  controls: ControlTuple[] = [['pillar', new FormControl(null)]];
  pillarEnum = Pillar;

  constructor(private sessionFormService: SessionFormService) {
    console.log(this.pillarEnum);
  }

  get form(): FormGroup {
    return this.sessionFormService.sessionForm;
  }

  get pillarKeys(): Array<string> {
    return Object.keys(this.pillarEnum);
  }

  ngOnInit(): void {
    this.sessionFormService.addControls(this.controls);
  }

  ngOnDestroy(): void {
    this.sessionFormService.removeControls(this.controls);
  }
}
