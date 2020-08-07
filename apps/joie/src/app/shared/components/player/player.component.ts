import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
})
export class PlayerComponent implements OnInit {
  @Input() width = 600;
  @Input() height = 400;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.boot();
  }
}
