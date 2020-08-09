import { Injectable } from '@angular/core';

import { KalturaClient, SessionStartAction, KalturaSessionType, KalturaMediaEntryFilter, KalturaFilterPager, MediaListAction } from 'kaltura-ngx-client';
import { throwError } from 'rxjs';

declare var kWidget;
@Injectable({ providedIn: 'root' })
export class PlayerService {
	kWidget = kWidget;
	kalturaConfiguration = {
		targetId: 'player',
		wid: '_2975031',
		uiconf_id: 46173531,
		flashvars: {},
		//cache_st: 1595096647,
		entry_id: '1_2wjkr9jy',
	};

	constructor(private kaltura: KalturaClient) {
		this.kaltura.setOptions({
			clientTag: 'sample-code',
			endpointUrl: 'https://www.kaltura.com',
		});
		// create session for Kalutura handshake
		this.kaltura.request(new SessionStartAction({
			secret: "e678a420f2c4728b725a880523a5fec6",
			userId: "pratheeshkumarrdcse@gmail.com",
			type: KalturaSessionType.admin,
			partnerId: 2975031,
		}))
			.subscribe(ks => {
				this.kaltura.setDefaultRequestOptions({ ks });
				this.runRequest();
			},
				error => {
					console.error(`failed to create session with the following error "SessionStartAction"`);
					throwError(error);
				})
	}

	boot() {
		this.kWidget.embed(this.kalturaConfiguration);
	}

	runRequest() {
		let filter = new KalturaMediaEntryFilter();
		let pager = new KalturaFilterPager();
	
		// retriving all the available videos
		this.kaltura.request(new MediaListAction({filter, pager}))
			.subscribe(result => {
			  console.log(result);
			},
			error => {
				throwError(error);
			})
	
	  }
}
