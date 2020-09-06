# Kaltura Integration guide

## Live Stream:

- Create a resource
- Create an event
- Merge an event with resource
- Create a session and join using event ID/ resource ID
- Embedding with iframes
- Event List
- Resource List

**Note**: All the functions are available at `kaltura-api-handshake.service.ts`

### 1. Create a resource
`createScheduleResource()`

#### Mandatory inputs:
`Resource name`

Output:
```
{
  "id": 1552771,
  "partnerId": 2976751,
  "name": "Test video",
  "description": "Test video",
  "status": 2,
  "createdAt": 1598975100,
  "updatedAt": 1598975100,
  "objectType": "KalturaLocationScheduleResource"
}
```

### 2. Create an event
`createScheduleEvent()`

#### Mandatory inputs:

`Start date`
`End date`
`Description`
`Summary`
`Duration`

Output:
```
{
  "blackoutConflicts": [],
  "id": 6420851,
  "partnerId": 2976751,
  "summary": "test video",
  "description": "test video",
  "status": 2,
  "startDate": 1598975160,
  "endDate": 1599061560,
  "classificationType": 1,
  "ownerId": "pratheeshkumarrd@gmail.com",
  "sequence": 11,
  "recurrenceType": 0,
  "duration": 86400,
  "createdAt": 1598975194,
  "updatedAt": 1598975194,
  "objectType": "KalturaRecordScheduleEvent"
}
```

### 3. Merge an event with resource
`createScheduleEventResource()`

#### Mandatory inputs:
`Event ID`
`Resource ID`

Output:
```
{
  "eventId": 6420851,
  "resourceId": 1552771,
  "partnerId": 2976751,
  "createdAt": 1598975299,
  "updatedAt": 1598975299,
  "objectType": "KalturaScheduleEventResource"
}
```

### 4 . Create a session and join using event ID/ resource ID
`createSession()`

#### Mandatory inputs:
`Event ID/ Resource ID`
`Role`
`Secret`
`Partner ID`
`User ID`

Output:
```
"djJ8Mjk3Njc1MXypNufGnEFTSEmxdUgvdeD2attQjfhDI7xsLav18O01CaTxTEVALsk7lBoyiGeAakDKhRjjY7oXcgdAcowgNC-9PZVEoo17_6FkOnM2NP5qQw=="
```

### 5. Embedding with iframes
```
https://${KalturaApiHandShakeService.partnerId}.kaf.kaltura.com/virtualEvent/launch?ks=${token}
```

### 6. Event List
`getScheduleEventList()`

Output:
```
{
  "objects": [
    {
      "templateEntryId": "123",
      "entryIds": "123",
      "blackoutConflicts": [],
      "id": 4495312,
      "partnerId": 2976751,
      "summary": "TestingAPI",
      "description": "Testing API",
      "status": 2,
      "startDate": 1597565400,
      "endDate": 1597566540,
      "classificationType": 1,
      "ownerId": "pratheeshkumarrd@gmail.com",
      "sequence": 12,
      "recurrenceType": 0,
      "duration": 1140,
      "tags": "custom_rec_auto_start: 1",
      "createdAt": 1597565433,
      "updatedAt": 1597566637,
      "objectType": "KalturaLiveStreamScheduleEvent"
    }
  ],
  "totalCount": 31,
  "objectType": "KalturaScheduleEventListResponse"
}
```

### 7. Resource List
`getScheduleResourceList()`

Output:
```
{
  "objects": [
    {
      "id": 1482391,
      "partnerId": 2976751,
      "name": "Live Session2",
      "systemName": "",
      "status": 2,
      "createdAt": 1597563971,
      "updatedAt": 1597563971,
      "objectType": "KalturaLocationScheduleResource"
    }
  ],
  "totalCount": 41,
  "objectType": "KalturaScheduleResourceListResponse"
}
```

## VOD Integration:
#### In Html:
```
<div id="kalturaVodPlayer" [style.width.px]="width" [style.height.px]="height" style="width: 100%; height: 500px;"></div>
```

#### In TS:
```
this.kalturaConfiguration = {
  targetId: KalturaVodPlayerComponent.targetId,
  wid: `_${environment.kalturaConfig.partner_id}`,
  uiconf_id: environment.kalturaConfig.uiconf_id,
  flashvars: {},
  entry_id: this.entryId,
};
this.kWidget.embed(this.kalturaConfiguration);
```

#### Mandatory inputs:

`Entry ID`

### Media List:
`getAllMediaList()`

Output:
```
{
  objects: [
    {
      mediaType: 2,
      sourceType: '35',
      dataUrl:
        'https://cdnsecakmi.kaltura.com/p/2976751/sp/297675100/thumbnail/entry_id/1_0v7lxhb8/def_height/480/def_width/640/version/100001/type/1',
      plays: 21,
      views: 193,
      lastPlayedAt: 1598688000,
      duration: 0,
      msDuration: 0,
      id: '1_0v7lxhb8',
      name: 'Channel Employee Engagement Thumbnail',
      partnerId: 2976751,
      userId: 'jason@joie.co',
      creatorId: 'jason@joie.co',
      categories: '',
      categoriesIds: '',
      status: 2,
      moderationStatus: 2,
      moderationCount: 0,
      type: 1,
      createdAt: 1597067539,
      updatedAt: 1597067539,
      rank: 0,
      totalRank: 0,
      votes: 0,
      downloadUrl:
        'https://cdnsecakmi.kaltura.com/p/2976751/sp/297675100/raw/entry_id/1_0v7lxhb8/version/100001',
      searchText: '_PAR_ONLY_ _2976751_ _MEDIA_TYPE_2|  Channel Employee Engagement Thumbnail ',
      licenseType: -1,
      version: '100001',
      thumbnailUrl:
        'https://cfvod.kaltura.com/p/2976751/sp/297675100/thumbnail/entry_id/1_0v7lxhb8/version/100001',
      accessControlId: 3453911,
      replacementStatus: 0,
      partnerSortValue: 0,
      rootEntryId: '0_95phfs23',
      operationAttributes: [],
      entitledUsersEdit: '',
      entitledUsersPublish: '',
      entitledUsersView: '',
      capabilities: '',
      displayInSearch: 1,
      objectType: 'KalturaMediaEntry',
    },
  ],
  totalCount: 1,
  objectType: 'KalturaMediaListResponse',
};
```
