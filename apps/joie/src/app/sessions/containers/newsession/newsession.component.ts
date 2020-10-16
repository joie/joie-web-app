import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PlayerService } from '../../sessions.service';
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

@Component({
  selector: 'app-newsession',
  templateUrl: './newsession.component.html',
  styleUrls: ['./newsession.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsessionComponent implements OnInit {
  widgets = [
    {
      icon: 's_calendar',
      content: 'March 24, 6:00 PM, EST',
    },
    {
      icon: 's_clock',
      content: '4 hours',
    },
    {
      icon: 's_desktop',
      content: 'On-demand',
    },
    {
      icon: 's_level',
      content: 'Beginners',
    },
    {
      icon: 's_price',
      content: '$180',
    },
    {
      icon: 's_share',
      content: 'share',
    },
  ];

  sessionCards = [
    {
      image: '',
      content: 'Full body stretch and yoga for stress & anxiety Relief',
      author: 'Jason Teitelbaum',
      price: 180,
      percent: 89,
      badge: true,
      badgeContent: 'Limitedtime offer: 15% off',
      status: 'Course',
    },
    {
      image: '',
      content: 'Full body stretch and yoga for stress & anxiety Relief',
      author: 'Jason Teitelbaum',
      price: 180,
      percent: 89,
      badge: false,
      badgeContent: '',
      status: 'Workshop',
    },
    {
      image: '',
      content: 'Full body stretch and yoga for stress & anxiety Relief',
      author: 'Jason Teitelbaum',
      price: 180,
      percent: 89,
      badge: true,
      badgeContent: 'Hurry up! Only 2 spots left.',
      status: 'On-demand',
    },
  ];

  @Input() width = 600;
  @Input() height = 400;
  entryID: any;
  uploadTokenID: any;
  uploading: Boolean;
  changing: Boolean;
  isVideo: Boolean;
  fileData: any;
  constructor(private playerService: PlayerService, private kalturaClient: KalturaClient) {}
  ngOnInit(): void {
    this.uploading = false;
    this.changing = false;
    this.isVideo = false;
  }

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
            let advancedOptions = new KalturaEntryReplacementOptions();
            let entryId = '1_v3d6yfj9';
            let resource = new KalturaUploadedFileTokenResource();
            resource.token = uploadTokenResponse.id;
            let conversionProfileId = 0;
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
                (result) => {
                  console.log('changing result->', result);
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
          .subscribe((result) => {
            // TODO - take values from the form
            const entry = new KalturaMediaEntry();
            // entry.name = 'hardcoded-2';
            entry.mediaType = KalturaMediaType.video;
            entry.description = '';

            this.kalturaClient.request(new MediaAddAction({ entry })).subscribe((result) => {
              this.entryID = result.rootEntryId;
              let entryId = result.rootEntryId;
              let resource = new KalturaUploadedFileTokenResource();
              resource.token = this.uploadTokenID;
              this.kalturaClient
                .request(new MediaAddContentAction({ entryId, resource }))
                .subscribe(
                  (result) => {
                    console.log('final result->', result);
                    setTimeout(() => {
                      this.playerService.boot(this.entryID);
                      this.uploading = false;
                      this.isVideo = true;
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
