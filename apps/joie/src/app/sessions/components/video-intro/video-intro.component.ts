import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-intro',
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.scss']
})
export class VideoIntroComponent implements OnInit {
  @Input() isLiveSession = true;
  @Input() displayName: string;
  @Input() eventId: number;
  @Input() sessionType: number;
  @Input() role: string;
  @Input() userContextualRole: number;
  @Input() entryId: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
