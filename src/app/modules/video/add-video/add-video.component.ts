import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent {
  selectedVideo:any;

  video={
    title:'',
    description:'',
    category:'',
    playlist:'',
    tags:''

  }
  categories:any
  playlists:any
  userId= this.act.snapshot.paramMap.get('uid')

  constructor(private act:ActivatedRoute){}

  addVideo(){
    const videoForm= new FormData();
    videoForm.append('title', this.video.title);
    videoForm.append('description', this.video.description);
    videoForm.append('category', this.video.category);
    if (this.video.playlist != ''){
      videoForm.append('playlist', this.video.playlist);
    }
    
    videoForm.append('tags', this.video.tags);
    videoForm.append('video', this.selectedVideo);
    if (this.userId !== null) {
      videoForm.append('author', this.userId);
    } else {
      // Handle the case where userId is null or undefined
    }  }


  cancelAddVideo(){}



  onVideoSelected(event:any){
    this.selectedVideo = event.target.files[0];
    
  }

}
