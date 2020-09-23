import { Component, OnInit } from '@angular/core';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { SessionsFacade } from '../../../services/sessions.facade';
import { KalturaApiHandShakeService } from '../../../kaltura-player/kaltura-api-handshake.service';
import { environment } from '../../../../environments/environment';
import { Format, Type } from '../../../sessions/enums';
import { IMAGE } from '../../components/session-form-metadata/session-form-metadata.component';
import { filter, finalize, last, map, mergeMap, pluck, switchMap, take, tap } from 'rxjs/operators';
import { combineLatest, concat, from, iif, Observable } from 'rxjs';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AuthFacade } from '../../../auth/services/auth.facade';
import { Owner } from '../../../models';
import { Session } from '../../../sessions/models';

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
    private kalturaApiHandShakeService: KalturaApiHandShakeService,
    private authFacade: AuthFacade
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
    // TODO move Kaltura to cloud function onCreate trigger
    this.kalturaApiHandShakeService.createLiveStreamEntry(eventCreationDetails).subscribe(
      ({ resourceId, eventId }) => {
        this.authFacade.owner$
          .pipe(
            take(1),
            map((owner) => ({
              owner,
              resourceId,
              eventId,
              ...this.form.value,
            })),
            switchMap((session) => this.sessionsFacade.setSession('', session)),
            switchMap(this.storeThumbnailIfAny$.bind(this)),
            tap(console.log),
            finalize(() => (this.showLoader = false))
          )
          .subscribe({
            error: (error) => {
              console.log(
                `Session creation form : submit() :: ${error} while inserting session details`
              );
            },
          });
      },
      (error) => {
        this.showLoader = false;
        console.log(
          `Kaltura Session creation: createLiveStreamEntry() :: ${error} while creating session`
        );
      }
    );
  }

  getFileExtension(filename: string) {
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || filename;
  }

  uploadThumbnail$(id: string, file: File): Observable<firebase.storage.UploadTaskSnapshot> {
    return this.authFacade.uid$.pipe(
      switchMap((uid) => {
        const path = `images/${uid}/sessions/${id}`;
        const name = `thumbnail.${this.getFileExtension(file.name)}`;

        const customMetadata = {};

        const ref: AngularFireStorageReference = this.storage.ref(path).child(name);
        const uploadTask: AngularFireUploadTask = ref.put(file, { customMetadata });

        // take only last - dont observe any other changes in between
        return uploadTask.snapshotChanges().pipe(last());
      })
    );
  }

  // async getUrl(ref: firebase.storage.Reference) {
  //   const url = await ref.getDownloadURL();
  //   console.log(ref);
  //   return url;
  // }

  // storeThumbnailRef$({ ref: { fullPath } }: firebase.storage.UploadTaskSnapshot) {
  //   console.log(arguments);
  //   return this.sessionsFacade.setSession('43g4ge', { imgUrl: fullPath });
  // }

  storeThumbnailIfAny$({ id: sessionId }: DocumentReference) {
    const { value: file } = this.getFormControl(IMAGE);

    return iif(
      // is user selected thumbnail image file
      () => Boolean(file),
      this.uploadThumbnail$(sessionId, file)
      // .pipe(switchMap(this.storeThumbnailRef$.bind(this)))
    );
  }

  // setSession$(session: Session) {
  //   return this.sessionsFacade.setSession('', session);
  // }
}
