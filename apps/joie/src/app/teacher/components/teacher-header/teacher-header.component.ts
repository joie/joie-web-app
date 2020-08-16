import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../../models/teacher.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss'],
})
export class TeacherHeaderComponent implements OnInit {
  // @Input() teacher$: Observable<Teacher>;

  constructor() {}

  ngOnInit(): void {}
}
