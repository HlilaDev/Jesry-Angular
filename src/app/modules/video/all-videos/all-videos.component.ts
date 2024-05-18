import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { VideoService } from 'src/app/core/services/video/video.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent implements OnInit{
  allVideos:any
  searchTerm:any;
  courses:any
  selectedCourse: any = null;
  
  constructor(private videoservices:VideoService , private courseservices:CourseService , private router:Router){}
  ngOnInit(): void {
this.getAllCourses()
this.getAllVideo()

  }

  getAllCourses(){
    this.courseservices.getAllCourses().subscribe((res)=>{
      this.courses = res
    })
  }

getAllVideo(){
  this.videoservices.getAllVideos().subscribe((res)=>{
    this.allVideos =res
  })
}
  playvideo(videoId:string){}

  searchVideos() {
    this.videoservices.seachVideosByQuerry(this.searchTerm).subscribe(
      (res:any) => {
        this.allVideos = res;
        console.log(res);
        

      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterByCourse(courseId:string){
    this.selectedCourse = courseId;
    
    if (courseId) {
      this.videoservices.getVideosByCourse(courseId).subscribe((res) => {
        this.allVideos = res;
        console.log(this.allVideos);
        
        
      });
    } else {
      this.getAllVideo();
    }
  }
}
