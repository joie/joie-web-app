import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-what-learn',
  templateUrl: './what-learn.component.html',
  styleUrls: ['./what-learn.component.scss'],
})
export class WhatLearnComponent implements OnInit {
  @Input() session: Session;

  constructor() {}

  ngOnInit(): void {}
}
