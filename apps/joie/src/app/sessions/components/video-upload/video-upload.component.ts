import { KalturaApiHandShakeService } from './../../../kaltura-player/kaltura-api-handshake.service';
import { SessionsService } from './../../../services/sessions/sessions.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  KalturaClient,
  UploadTokenUploadAction,
  UploadTokenAddAction,
  KalturaUploadToken,
  MediaAddAction,
  KalturaMediaType,
  KalturaMediaEntry,
  KalturaUploadedFileTokenResource,
  MediaAddContentAction,
  KalturaEntryReplacementOptions,
  MediaUpdateContentAction,
} from 'kaltura-ngx-client';
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
export class VideoUploadComponent implements OnInit {
  @Input() session: Session;
  @Input() sessionId: string;

  uploadTokenID: any;
  uploading = false;
  fileData: any;
  entryId: string;
  subscription: Subscription;

  constructor(
    private kalturaApiHandShakeService: KalturaApiHandShakeService,
    private kalturaClient: KalturaClient,
    private snackBar: MatSnackBar,
    private sessionsFacade: SessionsService
  ) {}

  async ngOnInit() {}

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
    this.subscription = this.kalturaClient
      .request(new UploadTokenAddAction({ uploadToken: new KalturaUploadToken() }))
      .pipe(
        mergeMap((uploadTokenReponse) => {
          this.uploadTokenID = uploadTokenReponse.id;
          return this.kalturaClient.request(
            new UploadTokenUploadAction({
              uploadTokenId: uploadTokenReponse.id,
              fileData: this.fileData,
              resume: true,
              finalChunk: true,
              resumeAt: -1,
            })
          );
        }),
        mergeMap((token) => {
          // TODO - take values from the form
          const entry = new KalturaMediaEntry();
          // entry.name = 'hardcoded-2';
          entry.mediaType = KalturaMediaType.video;
          entry.description = '';

          return this.kalturaClient.request(new MediaAddAction({ entry }));
        }),
        mergeMap((entry: KalturaMediaEntry) => {
          this.entryId = entry.rootEntryId;
          const entryId = entry.rootEntryId;
          const resource = new KalturaUploadedFileTokenResource();
          resource.token = this.uploadTokenID;
          return this.kalturaClient.request(new MediaAddContentAction({ entryId, resource }));
        }),
        untilDestroyed(this)
      )
      .pipe(untilDestroyed(this))
      .subscribe(
        async (result) => {
          console.log('result->', result);
          this.kalturaApiHandShakeService.boot(this.entryId);

          setTimeout(() => {
            this.uploading = false;
            this.snackBar.open('Uploaded successfully!', '', {
              duration: 3000,
            });
            this.sessionsFacade
              .setSession(this.sessionId, {
                entryId: this.entryId,
                entryLastUpdated: new Date().getTime(),
              });
          }, 60000);
        },
        (error) => {
          this.uploading = false;
        }
      );
  }

  fileReplace() {
    console.log('File replacing...');
    // this.fileData = fileInputEvent.target.files[0] as File;
    this.uploading = true;
    this.kalturaClient
      .request(new UploadTokenAddAction({ uploadToken: new KalturaUploadToken() }))
      .pipe(
        mergeMap((uploadTokenResponse) => {
          this.uploadTokenID = uploadTokenResponse.id;
          return this.kalturaClient.request(
            new UploadTokenUploadAction({
              uploadTokenId: uploadTokenResponse.id,
              fileData: this.fileData,
              resume: true,
              finalChunk: true,
              resumeAt: -1,
            })
          );
        }),
        mergeMap((token) => {
          const advancedOptions = new KalturaEntryReplacementOptions();
          const entryId = this.session.entryId;
          const resource = new KalturaUploadedFileTokenResource();
          resource.token = this.uploadTokenID;
          const conversionProfileId = 0;
          return this.kalturaClient.request(
            new MediaUpdateContentAction({
              entryId,
              resource,
              conversionProfileId,
              advancedOptions,
            })
          );
        })
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
            this.sessionsFacade
              .setSession(this.sessionId, {
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
        }
      );
  }
}