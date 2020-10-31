import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeVideoComponent } from '../youtube-video/youtube-video.component';

@NgModule({
  declarations: [YoutubeVideoComponent],
  imports: [YouTubePlayerModule],
  exports: [YoutubeVideoComponent],
})
export class YoutubeVideoModule {}
