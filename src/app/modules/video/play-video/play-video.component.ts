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

  constructor(
    private videoService: VideoService,
    private act: ActivatedRoute,
    private router: Router,
    private fav: FavService,
    private auth: AuthService,
    private courseservices: CourseService
  ) {}

  ngOnInit(): void {
    this.videoId = this.act.snapshot.paramMap.get('vid');
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
        this.checkSubscriptionStatus(); // Check subscription status after getting video details
        this.getVideosByCourseId();
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

  confirmUnsubscribe(): void {
    this.showUnsubscribeConfirm = true;
  }

  addLike(): void {
    // Add like functionality here
  }

  addToFav(): void {
    this.fav.addFav(this.videoId, this.userId).subscribe((res) => {
      console.log('Video added to favorites!');
    });
  }
}
