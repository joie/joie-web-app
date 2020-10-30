import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DynaFormBaseComponent } from '../../../../../../../libs/dyna-form';
import { SessionsService } from '../../../services/sessions/sessions.service';
import { KalturaApiHandShakeService } from '../../../kaltura-player/kaltura-api-handshake.service';
import { environment } from '../../../../environments/environment';
import { Format, Type } from '../../../sessions/enums';
import { IMAGE } from '../../components/session-form-metadata/session-form-metadata.component';
import { catchError, finalize, last, map, switchMap, take } from 'rxjs/operators';
import { iif, Observable, of, scheduled } from 'rxjs';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { DocumentReference } from '@angular/fire/firestore';
import { AuthFacade } from '../../../auth/services/auth.facade';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { get } from 'lodash';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss'],
})
export class SessionFormComponent extends DynaFormBaseComponent implements OnInit, OnDestroy {
  commonLayoutClass = 'layout-rows-xs';
  showAllFields: boolean;
  showLoader = false;
  title = 'Create Session';
  sessionId;

  constructor(
    private sessionsService: SessionsService,
    private storage: AngularFireStorage,
    private kalturaApiHandShakeService: KalturaApiHandShakeService,
    private authFacade: AuthFacade,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { session: any }
  ) {
    super();
    if (get(this.data, 'session', false)) {
      this.storeFormValueRef(this.data.session);
      this.sessionId = get(this.data, 'sessionId');
      this.title = 'Edit Session';
      this.showAllFields = true;
    }
  }

  ngOnInit() {
    this.kalturaApiHandShakeService.getKalturaSession();
  }

  ngOnDestroy() {
    this.removeFormValueRef();
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

    console.log('form: ', this.form.value);

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
            switchMap((session) => this.sessionsService.setSession(get(this.data, 'sessionId', ''), session)),
            switchMap((session) => {
              if (this.sessionId) {
                return this.storeThumbnailIfAny$(null);
              } else {
                return session ? this.storeThumbnailIfAny$(session) : [];
              }
            }
            ),
            finalize(() => this.showLoader = false)
          )
          .subscribe(
            (res) => {
              this.showLoader = false;
              this.snackBar.open(
                `Session ${
                  get(this.data, 'sessionId', false) ? 'updated' : 'created'
                } successfully`,
                'View',
                {
                  duration: 4000,
                  horizontalPosition: 'end',
                  verticalPosition: 'bottom',
                }
              );
              if (!get(this.data, 'session', false)) {
                this.form.reset();
              }
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

  storeThumbnailRef$(
    { ref: { fullPath } }: firebase.storage.UploadTaskSnapshot,
    sessionId: string
  ) {
    return this.sessionsService.setSession(sessionId, { thumbRef: fullPath });
  }

  storeThumbnailIfAny$(session: DocumentReference) {
    const sessionId = session ? session.id : this.sessionId;
    const { value: file } = this.getFormControl(IMAGE);

    return iif(
      // is user selected thumbnail image file
      () => Boolean(file),
      this.uploadThumbnail$(sessionId, file).pipe(
        switchMap((snapshot) => this.storeThumbnailRef$(snapshot, sessionId))
      )
    );
  }
}
