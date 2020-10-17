import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { mergeMap } from 'rxjs/operators';
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
import { PlayerService } from '../../../services/player.service';
import { SessionsFacade } from '../../../services/sessions.facade';
import { Session } from '../../models';

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
  changing = false;
  fileData: any;
  entryId: string;

  constructor(
    private playerService: PlayerService,
    private kalturaClient: KalturaClient,
    private snackBar: MatSnackBar,
    private sessionsFacade: SessionsFacade
  ) {}

  ngOnInit(): void {}

  fileReplace(fileInputEvent: any) {
    this.fileData = fileInputEvent.target.files[0] as File;
    this.changing = true;
    this.kalturaClient
      .request(new UploadTokenAddAction({ uploadToken: new KalturaUploadToken() }))
      .subscribe((uploadTokenResponse) => {
        this.kalturaClient
          .request(
            new UploadTokenUploadAction({
              uploadTokenId: uploadTokenResponse.id,
              fileData: this.fileData,
              resume: true,
              finalChunk: true,
              resumeAt: -1,
            })
          )
          .subscribe((result) => {
            const advancedOptions = new KalturaEntryReplacementOptions();
            const entryId = '1_v3d6yfj9';
            const resource = new KalturaUploadedFileTokenResource();
            resource.token = uploadTokenResponse.id;
            const conversionProfileId = 0;
            this.kalturaClient
              .request(
                new MediaUpdateContentAction({
                  entryId,
                  resource,
                  conversionProfileId,
                  advancedOptions,
                })
              )
              .subscribe(
                (res) => {
                  console.log('changing result->', res);
                  this.changing = false;
                },
                (error) => {
                  this.changing = false;
                  console.log('replacing error-->', error);
                }
              );
          });
      });
  }

  onClickFile(fileInputEvent: any) {
    this.fileData = fileInputEvent.target.files[0] as File;
    this.fileUpload();
    console.log('clicking file->', this.fileData);
  }

  public dropped(files: NgxFileDropEntry[]) {
    if (files[0].fileEntry.isFile) {
      const temp = files[0].fileEntry as FileSystemFileEntry;
      temp.file((file: File) => {
        this.fileData = file;
        this.fileUpload();
      });
    }
  }

  fileUpload() {
    this.uploading = true;
    this.kalturaClient
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
        })
      )
      .subscribe(
        (result) => {
          this.snackBar.open('Uploaded successfully!', '', {
            duration: 3000,
          });
          this.sessionsFacade.setSession(this.sessionId, { entryId: this.entryId });
        },
        (error) => {
          this.snackBar.open('Upload Error', '', {
            duration: 3000,
          });
        },
        () => this.uploading = false
      );
  }
}
