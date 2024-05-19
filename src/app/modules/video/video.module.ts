import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { AddVideoComponent } from './add-video/add-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { FormsModule } from '@angular/forms';
import { VideosListComponent } from './videos-list/videos-list.component';
import { PlayVideoComponent } from './play-video/play-video.component';


@NgModule({
  declarations: [
    AddVideoComponent,
    EditVideoComponent,
    AllVideosComponent,
    VideosListComponent,
    PlayVideoComponent,
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    FormsModule
  ]
})
export class VideoModule { }
