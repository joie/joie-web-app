# Joie Sessions - Kaltura flow
### Apply Kaltura integration through cloud functions
- Session update trigger
  - from draft to public adds Kaltura event
  - from public to draft removes kaltura ref and garbage collect kaltura resource
- Session delete trigger
  - garbage collect any Kaltura reference (resources / events etc'...)

### On-demand video uploads
#### User with teacher claim only can upload videos
- handle kaltura authorization of upload (so it's not possible to anyone to upload)
- some videos are private and should be enroled to. meaning only authorized students are entitled to access - how is this handled by Joie / Kaltura?
- supported types of files
- file size rules

### Garbage collect unrelevant videos
- Replace video
- Delete video

### Misc
- if a teacher hacks the client and uses the current auth against Kaltura, can they obuse the API and add entries, uploads, resources? anything worth mentioning?
- Uploading a video should reflect progress indication - been told to plainly observe http call events but we're using the [Kaltura angular library](https://github.com/kaltura/kaltura-ng)'s _MediaAddContentAction_ observable which only emits on completion. should we use a different method?

### Practices for database
- Uploaded videos should be stored in firestore session document as refs (entryId?, resourceId?)
- Is the angular, 2 year old, library trustworthy?
- Background sync for multiple videos?

### Streaming (to be defined)

