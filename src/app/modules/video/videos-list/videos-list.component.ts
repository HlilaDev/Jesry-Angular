import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { VideoService } from 'src/app/core/services/video/video.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit{
  videos:any;
  videoCount:any;
  userId:any

  constructor(private router:Router , private courseservice:CourseService , private videoservices:VideoService){}


  ngOnInit(): void {
    this.getAllVideos()
  }

  getAllVideos(){
    this.videoservices.getAllVideos().subscribe((res)=>{
      this.videos = res
    
    })
  }

  onAddVideo(){
    this.router.navigate([`/vids/add-video/${this.userId}`])
  }

  onEdit(videoId:any){
    this.router.navigate([`/vids/edit-video/${this.userId}`])
  }

  onDelete(videoId:any){
    this.videoservices.deleteVideo(videoId).subscribe((res)=>{
      this.getAllVideos()
    })
  }


}
