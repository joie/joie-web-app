import { Component } from '@angular/core';
import { list } from './needs';

@Component({
  selector: 'app-partner-up',
  templateUrl: './partner-up.component.html',
  styleUrls: ['./partner-up.component.scss'],
})
export class PartnerUpComponent  {
  list = list;
  constructor() {}

}
