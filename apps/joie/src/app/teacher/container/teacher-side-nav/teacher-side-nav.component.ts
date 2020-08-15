import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-side-nav',
  templateUrl: './teacher-side-nav.component.html',
  styleUrls: ['./teacher-side-nav.component.scss'],
})
export class TeacherSideNavComponent implements OnInit {
  @Input() tabs$: Observable<string[]>;
  constructor() {}

  ngOnInit(): void {}
}
