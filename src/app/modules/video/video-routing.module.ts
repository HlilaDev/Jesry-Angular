import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { adminModeratorGuard } from 'src/app/core/gurads/admin-moderator/admin-moderator.guard';

const routes: Routes = [
  {path:'' , component:AllVideosComponent} ,
  {path:'add-video' , component:AddVideoComponent , canActivate:[adminModeratorGuard]},
  {path:'edit-video/:uid' , component:EditVideoComponent, canActivate:[adminModeratorGuard]},
  {path:'videos-list' , component:VideosListComponent, canActivate:[adminModeratorGuard]},
  {path:'play/:vid' , component:PlayVideoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
