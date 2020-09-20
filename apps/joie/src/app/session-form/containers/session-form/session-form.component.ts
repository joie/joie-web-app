import { Component, OnInit } from '@angular/core';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { SessionsFacade } from '../../../services/sessions.facade';
import { KalturaApiHandShakeService } from '../../../kaltura-player/kaltura-api-handshake.service';
import { environment } from '../../../../environments/environment';
import { Format, Type } from '../../../sessions/enums';
import { IMAGE } from '../../components/session-form-metadata/session-form-metadata.component';
import { filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { iif, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss'],
})
export class SessionFormComponent extends DynaFormBaseComponent implements OnInit {
  commonLayoutClass = 'layout-rows-xs';
  showAllFields: boolean;
  showLoader = false;

  constructor(
    private sessionsFacade: SessionsFacade,
    private storage: AngularFireStorage,
    private kalturaApiHandShakeService: KalturaApiHandShakeService
  ) {
    super();
  }

  ngOnInit() {
    this.kalturaApiHandShakeService.getKalturaSession();
  }

  get isCoaching() {
    return this.getFormControl('type').value === Type.Coaching;
  }

  get isLivestreaming() {
    return this.getFormControl('format').value === Format.LiveStreaming;
  }

  get isCourse() {
    return Type[this.getFormControl('type').value] === Type.Course;
  }

  async onSubmit() {
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
          .setSession('sessions', {
            ...this.form.value,
            resourceId: sessionRes.resourceId,
            eventId: sessionRes.eventId,
          })
          .pipe(
            filter(Boolean),
            switchMap((doc) =>
              iif(
                // is user selected image file
                () => this.getFormControl(IMAGE).value,
                this.storeImgFile$(doc as DocumentReference, this.getFormControl(IMAGE).value)
              )
            )
          )
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

  uploadFile$(id: string, file: File): Observable<{ downloadURL: string }> {
    const path = 'images/sessions/thumbs';
    // console.log('heeyyy', this.storage.ref(path).child(id).put(file));

    return this.storage
      .ref(path)
      .child(id)
      .put(file)
      .snapshotChanges()
      .pipe(map(({ ref }) => ref.getDownloadURL()));
  }

  storeImgFile$({ id }: DocumentReference, file: File) {
    return this.uploadFile$(id, file).pipe(
      tap(console.log),
      switchMap(({ downloadURL: imgUrl }) =>
        this.sessionsFacade.setSession(`sessions/${id}`, { imgUrl })
      )
    );
  }
}
