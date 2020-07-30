import { Component, OnInit } from '@angular/core';
import { list } from './features';

@Component({
  selector: 'app-partner-up',
  templateUrl: './partner-up.component.html',
  styleUrls: ['./partner-up.component.scss'],
})
export class PartnerUpComponent implements OnInit {
  list = list;
  constructor() {}

  ngOnInit(): void {}
}
