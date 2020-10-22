import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../../models';

@Component({
  selector: 'app-meet-teacher',
  templateUrl: './meet-teacher.component.html',
  styleUrls: ['./meet-teacher.component.scss']
})
export class MeetTeacherComponent implements OnInit {
  @Input() session: Session;
  constructor() { }

  ngOnInit(): void {
  }

}
