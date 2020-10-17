import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoUploadComponent implements OnInit {
  entryID: any;
  uploadTokenID: any;
  uploading = false;
  changing = false;
  fileData: any;

  constructor(private playerService: PlayerService, private kalturaClient: KalturaClient) {}

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
      .subscribe((uploadTokenReponse) => {
        console.log('uploaded token response->', uploadTokenReponse);
        this.uploadTokenID = uploadTokenReponse.id;
        this.kalturaClient
          .request(
            new UploadTokenUploadAction({
              uploadTokenId: uploadTokenReponse.id,
              fileData: this.fileData,
              resume: true,
              finalChunk: true,
              resumeAt: -1,
            })
          )
          .subscribe((res) => {
            // TODO - take values from the form
            const entry = new KalturaMediaEntry();
            // entry.name = 'hardcoded-2';
            entry.mediaType = KalturaMediaType.video;
            entry.description = '';

            this.kalturaClient.request(new MediaAddAction({ entry })).subscribe((res1) => {
              this.entryID = res1.rootEntryId;
              const entryId = res1.rootEntryId;
              const resource = new KalturaUploadedFileTokenResource();
              resource.token = this.uploadTokenID;
              this.kalturaClient
                .request(new MediaAddContentAction({ entryId, resource }))
                .subscribe(
                  (result) => {
                    console.log('final result->', result);
                    setTimeout(() => {
                      this.playerService.boot(this.entryID);
                      console.log(this.entryID);
                      this.uploading = false;
                    }, 20000);
                  },
                  (error) => {
                    this.uploading = false;
                    console.log('final error-->', error);
                  }
                );
              // this.playerService.reboot('1_0zbhgbzx');
            });
          });
      });
  }
}
