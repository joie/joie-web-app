# Joie Sessions - Kaltura flow

Joie's implementation of Kaltura should handle multiple entities, meaning each session should have its own Kaltura resource upon requirement (question is if that's a good practice or should we use same credentials for all).

a session requires any kaltura ref/resource will pair with a new dedicated document in _kalturaSession_ collection. requests to kaltura resource will be decorated with a `getKalturaSession` function to retrive (or create and retrieve) the required credential/entryId/eventId/resourceId.
if session has no need in kaltura resource, it should never waste such resource or even have a pairing document in _kalturaSession_ collection. 


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
- Can we also add here, which of Kaltura libraries (nodejs) do you suggest for us to use on server side so we handle the handshake, so we are safe on secret keys? Recently we discovered Kaltura TypeScript Client we are experimenting with it to use in the server side, is it the correct package to use?
- when uploading a file, on Kaltura it takes some time to be processed but on our side we are not able to find/detect this finished processing event and we see this image: https://user-images.githubusercontent.com/32432082/96609246-50020180-12c8-11eb-8874-1995d57dcb77.png , how to detect the event that the file(image/video) finished processing?

### Streaming (to be defined)

