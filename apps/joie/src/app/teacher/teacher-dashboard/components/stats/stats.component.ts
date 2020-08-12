import { Component, OnInit, Input } from '@angular/core';
import { Stat } from '../../../../models/teacher.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() stats: Stat[];
  constructor() {}

  ngOnInit(): void {}
}
