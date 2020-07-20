import { Injectable } from '@angular/core';
declare var kWidget;

@Injectable({ providedIn: 'root' })
export class PlayerService {
  kWidget = kWidget;

  kalturaConfiguration = {
    targetId: 'player',
    wid: '_2947731',
    uiconf_id: 46076591,
    flashvars: {},
    cache_st: 1595096647,
    entry_id: '1_274wrn3d',
  };

  boot() {
    this.kWidget.embed(this.kalturaConfiguration);
  }
}
