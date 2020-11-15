import { Component, Input } from '@angular/core';
import { Stat } from '../../../../../../../../libs/schemes/src';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  @Input() stats: Stat[];
}
