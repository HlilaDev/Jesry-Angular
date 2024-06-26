import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';
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
  videoId: any;
  userId: any;
  isSubscribed: boolean = false;
  showUnsubscribeConfirm: boolean = false;
  showRemoveFromFavConfirm: boolean = false;
  isLiked: boolean = false;
  isFav: boolean = false;

  constructor(
    private videoService: VideoService,
    private act: ActivatedRoute,
    private router: Router,
    private fav: FavService,
    private auth: AuthService,
    private courseservices: CourseService
  ) {}

  ngOnInit(): void {
    this.userId = this.auth.getUserIDFromToken();
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
        this.videoId = this.video?._id;

        this.checkSubscriptionStatus(); // Check subscription status after getting video details
        this.getVideosByCourseId();
        this.incrementViews();
        this.checkIfLiked();
        this.checkIfFav();
      },
      (error) => {
        console.error('Error fetching video by ID', error);
      }
    );
  }

  getVideosByCourseId(): void {
    const courseId = this.video?.course._id;
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

  checkSubscriptionStatus(): void {
    if (this.userId && this.video?.course?._id) {
      this.courseservices.isSubscribed(this.userId, this.video.course._id).subscribe(
        (res: any) => {
          this.isSubscribed = res.isSubscribed;
        },
        (error) => {
          console.error('Error checking subscription status', error);
        }
      );
    }
  }

  subscribe(): void {
    this.courseservices.onSubscribe(this.userId, this.video.course._id).subscribe(() => {
      this.isSubscribed = true;
    });
  }

  unsubscribe(): void {
    this.courseservices.onUnSubscribe(this.userId, this.video.course._id).subscribe(() => {
      this.isSubscribed = false;
      this.showUnsubscribeConfirm = false;
    });
  }

  incrementViews(): void {
    this.videoService.incrementViews(this.videoId).subscribe();
  }

  confirmUnsubscribe(): void {
    this.showUnsubscribeConfirm = true;
  }

  confirmRemoveFromFav(): void {
    this.showRemoveFromFavConfirm = true;
  }

  addLike(): void {
    this.videoService.addLike(this.userId, this.videoId).subscribe(() => {
      this.isLiked = true;
      this.video.likes++;
    });
  }

  removeLike(): void {
    this.videoService.removeLike(this.userId, this.videoId).subscribe(() => {
      this.isLiked = false;
      this.video.likes--;
    });
  }

  checkIfLiked(): void {
    this.videoService.isLiked(this.userId, this.videoId).subscribe(
      (res: any) => {
        this.isLiked = res;
      },
      (error) => {
        console.error('Error checking if video is liked', error);
      }
    );
  }

  checkIfFav(): void {
    this.fav.isFav(this.userId, this.videoId).subscribe((res: any) => {
      this.isFav = res;
    });
  }

  addToFav(): void {
  

    this.fav.addFav(this.userId ,this.videoId ).subscribe(() => {
      this.isFav = true;
    });
  }

  removeFromFav(): void {
  
    this.fav.removeFav(this.userId ,this.videoId).subscribe(() => {
      this.isFav = false;
      this.showRemoveFromFavConfirm = false;
    });
  }
}
