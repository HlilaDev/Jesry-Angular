import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { VideoService } from 'src/app/core/services/video/video.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent implements OnInit {
  allVideos: any[] = [];
  searchTerm: any;
  courses: any;
  selectedCourse: any = null;

  // Scroll infinite
  page = 1;
  pageSize = 9;
  isLoading = false;

  constructor(private videoService: VideoService, private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCourses();
    this.loadVideos();
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe((res) => {
      this.courses = res;
    });
  }

  loadVideos() {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.videoService.getAllVideos(this.page, this.pageSize).subscribe(
      (res: any) => {
        this.allVideos = this.allVideos ? [...this.allVideos, ...res] : res as any[];
        this.isLoading = false;
        this.page++;
      },
      (error) => {
        this.isLoading = false;
        console.error(error);
      }
    );
  }

  playvideo(videoId: string) {
    this.router.navigate([`/vids/play/${videoId}`]);
  }

  searchVideos() {
    this.videoService.seachVideosByQuerry(this.searchTerm).subscribe(
      (res: any) => {
        this.allVideos = res;
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterByCourse(courseId: string) {
    this.selectedCourse = courseId;

    if (courseId) {
      this.videoService.getVideosByCourse(courseId).subscribe((res) => {
        this.allVideos = res;
        console.log(this.allVideos);
      });
    } else {
      this.loadVideos();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollHeight = event.target.documentElement.scrollHeight;
    const scrollTop = event.target.documentElement.scrollTop;
    const clientHeight = event.target.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !this.isLoading) {
      this.loadVideos();
    }
  }
}