import { Component, Input } from '@angular/core';
import { Stat } from '../../../../models/account.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() stats: Stat[];
  constructor() {}
}
