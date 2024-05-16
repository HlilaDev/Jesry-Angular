import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';

const routes: Routes = [
  {path:'' , component:AllVideosComponent} ,
  {path:'add-video/:uid' , component:AddVideoComponent},
  {path:'edit-video' , component:EditVideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
