import { KalturaApiHandShakeService } from './../../../kaltura-player/kaltura-api-handshake.service';
import { SessionsService } from './../../../services/sessions/sessions.service';
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { KalturaMediaEntry } from 'kaltura-ngx-client';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { Session } from '../../models';
import { Subscription } from 'rxjs';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoUploadComponent {
  @Input() session: Session;
  @Input() sessionId: string;

  uploadTokenID: any;
  uploading = false;
  fileData: any;
  entryId: string;
  subscription: Subscription;

  constructor(
    private kalturaApiHandShakeService: KalturaApiHandShakeService,
    private snackBar: MatSnackBar,
    private sessionsFacade: SessionsService,
  ) {}

  onClickFile(fileInputEvent: any) {
    this.fileData = fileInputEvent.target.files[0] as File;
    console.log('clicking file->', this.fileData);
    if (this.session.entryId) {
      this.fileReplace();
    } else {
      this.fileUpload();
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    if (files[0].fileEntry.isFile) {
      const temp = files[0].fileEntry as FileSystemFileEntry;
      temp.file((file: File) => {
        this.fileData = file;
        if (this.session.entryId) {
          this.fileReplace();
        } else {
          this.fileUpload();
        }
      });
    }
  }

  fileUpload() {
    console.log('File uploading...');
    this.uploading = true;
    this.subscription = this.kalturaApiHandShakeService
      .createUploadTokenAddAction()
      .pipe(
        mergeMap((uploadTokenReponse) => {
          this.uploadTokenID = uploadTokenReponse.id;
          return this.kalturaApiHandShakeService.createUploadTokenUploadAction(this.uploadTokenID, this.fileData);
        }),
        mergeMap((token) => {
          // TODO - take values from the form
          const data = {
            description: '',
            name: '',
            // name: 'hardcoded-2',
          };
          return this.kalturaApiHandShakeService.createMediaAddAction(data);
        }),
        mergeMap((entry: KalturaMediaEntry) => {
          this.entryId = entry.rootEntryId;
          return this.kalturaApiHandShakeService.createMediaAddContentAction(this.entryId, this.uploadTokenID);
        }),
      )
      .pipe(untilDestroyed(this))
      .subscribe(
        (result) => {
          console.log('result->', result);
          this.kalturaApiHandShakeService.boot(this.entryId);
          // @TODO: find a way to detect when processing ends on Kalutra side
          setTimeout(() => {
            this.uploading = false;
            this.snackBar.open('Uploaded successfully!', '', {
              duration: 3000,
            });
            this.sessionsFacade.setSession(this.sessionId, {
              entryId: this.entryId,
              entryLastUpdated: new Date().getTime(),
            });
          }, 6000);
        },
        (error) => {
          console.log(error);
          this.uploading = false;
        },
      );
  }

  fileReplace() {
    console.log('File replacing...');
    // this.fileData = fileInputEvent.target.files[0] as File;
    this.uploading = true;
    this.kalturaApiHandShakeService
      .createUploadTokenAddAction()
      .pipe(
        mergeMap((uploadTokenResponse) => {
          this.uploadTokenID = uploadTokenResponse.id;
          return this.kalturaApiHandShakeService.createUploadTokenUploadAction(this.uploadTokenID, this.fileData);
        }),
        mergeMap((token) => {
          const entryId = this.session.entryId;
          const conversionProfileId = 0;

          return this.kalturaApiHandShakeService.createMediaUpdateContentAction(
            entryId,
            this.uploadTokenID,
            conversionProfileId,
          );
        }),
      )
      .pipe(untilDestroyed(this))
      .subscribe(
        (res) => {
          console.log('changing result->', res);
          setTimeout(() => {
            this.snackBar.open('Uploaded successfully!', '', {
              duration: 3000,
            });
            this.uploading = false;
            this.sessionsFacade.setSession(this.sessionId, {
              entryLastUpdated: new Date().getTime(),
            });
          }, 60000);
        },
        (error) => {
          this.uploading = false;
          this.snackBar.open('Upload Error', '', {
            duration: 3000,
          });
          console.log('replacing error-->', error);
        },
      );
  }
}
