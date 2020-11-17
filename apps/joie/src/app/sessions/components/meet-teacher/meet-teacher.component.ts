import { Component, Input } from '@angular/core';
import { Session } from '../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-meet-teacher',
  templateUrl: './meet-teacher.component.html',
  styleUrls: ['./meet-teacher.component.scss'],
})
export class MeetTeacherComponent {
  @Input() session: Session;
}
