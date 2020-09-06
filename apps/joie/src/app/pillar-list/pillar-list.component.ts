import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PillarKeywordEmphasisPipe } from '../home/pipes/pillar-keyword-emphasis/pillar-keyword-emphasis.pipe';
import { Pillar } from '../sessions/models/session';
const pillars = [
  {
    imgUrl: '/assets/images/movement.png',
    title: Pillar.movement,
    description: 'Exercise, Energy, Diet, and Nutrition.',
  },
  {
    imgUrl: '/assets/images/emotions.png',
    title: Pillar.emotions,
    description: 'Self-Regulation, Self-care, Relaxation, Stress Reduction, and Inner Strength.',
  },
  {
    imgUrl: '/assets/images/connections.png',
    title: Pillar.connections,
    description: 'Social interactions, Friendships, Parenting, and Relationships.',
  },
  {
    imgUrl: '/assets/images/spirit.png',
    title: Pillar.spirit,
    description: 'Seek Meaning, Individual Purpose, Faith, Values, Ethics and Morals.',
  },
  {
    imgUrl: '/assets/images/professional.png',
    title: Pillar.professional,
    description: 'Satisfaction at Work, Professional Development, and Financial Stability.',
  },
];

@Component({
  selector: 'app-pillar-list',
  templateUrl: './pillar-list.component.html',
  styleUrls: ['./pillar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PillarKeywordEmphasisPipe],
})
export class PillarListComponent implements OnInit {
  form: FormGroup;
  pillars = pillars;
  @Input() selectable = false;
  @Input() descriptions = false;
  constructor() {}

  ngOnInit(): void {
    console.log('init');
    console.log(pillars);
  }
}
