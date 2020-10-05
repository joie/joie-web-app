import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../models';

@Component({
  selector: 'app-community-say',
  templateUrl: './community-say.component.html',
  styleUrls: ['./community-say.component.scss']
})
export class CommunitySayComponent implements OnInit {
  @Input() session: Session;
  constructor() { }

  ngOnInit(): void {
  }

}
