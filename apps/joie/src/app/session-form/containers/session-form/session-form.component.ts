import { Component, OnInit } from '@angular/core';
import { SessionFormat } from './../../../sessions/models/session';
import { SessionType } from '../../../sessions/models/session';
import { DynaFormBaseComponent } from '@joie/dyna-form';
import { SessionsFacade } from '../../../services/sessions.facade';
import { KalturaApiHandShakeService } from '../../../kaltura-player/kaltura-api-handshake.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss'],
})
export class SessionFormComponent extends DynaFormBaseComponent implements OnInit {
  showAllFields: boolean;
  showLoader = false;

  constructor(
    private sessionsFacade: SessionsFacade,
    private kalturaApiHandShakeService: KalturaApiHandShakeService
  ) {
    super();
  }

  ngOnInit() {
    this.kalturaApiHandShakeService.getKalturaSession();
  }

  get isCoaching() {
    return this.getFormControl('type').value === SessionType.Coaching;
  }

  get isLivestreaming() {
    return this.getFormControl('format').value === SessionFormat.LiveStreaming;
  }

  get isCourse() {
    return SessionType[this.getFormControl('type').value] === SessionType.Course;
  }

  onSubmit() {
    this.showLoader = true;
    const currentDate = Date.now();

    const eventCreationDetails = {
      resourceName: this.form.value.title,
      scheduleResourceType: 3,
      summary: this.form.value.title,
      entryIds: currentDate,
      templateEntryId: currentDate,
      description: this.form.value.description,
      startDate: new Date(currentDate), // TODO: start date will be populated based on the user selected date
      endDate: new Date(currentDate + 60 * 60 * 1000), // TODO: end date will be populated based on the user selected date
      tags: environment.kalturaConfig.resourceTags,
    };
    this.kalturaApiHandShakeService.createLiveStreamEntry(eventCreationDetails).subscribe(
      (sessionRes) => {
        this.sessionsFacade
          .postSession('sessions', {
            ...this.form.value,
            resourceId: sessionRes.resourceId,
            eventId: sessionRes.eventId,
          })
          .subscribe(
            (session) => {
              this.showLoader = false;
            },
            (error) => {
              this.showLoader = false;
              console.log(
                `Session creation form : submit() :: ${error} while inserting session details`
              );
            }
          );
      },
      (error) => {
        this.showLoader = false;
        console.log(
          `Kaltura Session creation: createLiveStreamEntry() :: ${error} while creating session`
        );
      }
    );
  }
}
