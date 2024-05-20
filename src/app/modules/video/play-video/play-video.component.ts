import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavService } from 'src/app/core/services/favs/fav.service';
import { VideoService } from 'src/app/core/services/video/video.service';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  video: any;
  relatedVideos: any;
  videoId:any;

  constructor(
    private videoService: VideoService,
    private act: ActivatedRoute,
    private router: Router ,
    private fav:FavService,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameters to handle changes
    this.act.params.subscribe(params => {
      const videoId = params['vid'];
      if (videoId) {
        this.getVideoById(videoId);
      }
    });
  }

  getVideoById(videoId: string): void {
    this.videoService.getVideoById(videoId).subscribe(
      (res) => {
        this.video = res;
        console.log(res);
        
        this.getVideosByCourseId();
      },
      (error) => {
        console.error('Error fetching video by ID', error);
      }
    );
  }

  getVideosByCourseId(): void {
    const courseId = this.video?.course;
    if (courseId) {
      this.videoService.getVideosByCourse(courseId).subscribe(
        (relatedRes) => {
          this.relatedVideos = relatedRes;
        },
        (error) => {
          console.error('Error fetching related videos', error);
        }
      );
    } else {
      console.warn('Course ID is undefined, cannot fetch related videos.');
    }
  }

  playVideo(videoId: any): void {
    this.router.navigate([`/vids/play/${videoId}`]);
  }

  addLike(): void {
    // Add like functionality here
  }

  addToFav(): void {
    const userId = this.auth.getUserIDFromToken()  
   this.videoId = this.video?._id
this.fav.addFav(this.videoId, userId).subscribe((res)=>{
  console.log('video added to favorites !');
  
})

}
}
