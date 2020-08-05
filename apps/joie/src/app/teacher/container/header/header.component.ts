import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() teacher$: Observable<Teacher>;

  constructor() {}

  ngOnInit(): void {}
}
