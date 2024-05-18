import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';
import { SectionService } from 'src/app/core/services/section/section.service';
import { VideoService } from 'src/app/core/services/video/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  selectedVideo:any;

  video ={
    title:'',
    description:'',
    section:'',
    course:'',
    author:'',
    playlist:'',
    tags:''

  }
  playlists:any
  courses:any
  sections:any

  constructor(private sectionservices:SectionService, private videoservices:VideoService ,private courseservices:CourseService, private auth:AuthService , private router:Router){}
  ngOnInit(): void {
    this.getAllCourses()
    this.getSections()
  }


  getAllCourses(){
    this.courseservices.getAllCourses().subscribe((res)=>{
      this.courses=res
    })
  }

  getSections(){
    this.sectionservices.getAllSections().subscribe((res)=>{
      this.sections = res
    })

  }
  addVideo(){
    const videoForm= new FormData();
    const authorId = this.auth.getUserIDFromToken()
    videoForm.append('title', this.video.title.toString());
    videoForm.append('description', this.video.description.toString());
    videoForm.append('section', this.video.section);
    videoForm.append('course', this.video.course);
    videoForm.append('author', authorId);

    if (this.video.playlist != ''){
      videoForm.append('playlist', this.video.playlist);
    }
    
    videoForm.append('tags', this.video.tags);
    videoForm.append('video', this.selectedVideo);

    this.videoservices.addVideo(videoForm).subscribe((res)=>{
      
      
      this.router.navigate(['/vids'])
    })
  
  }


  cancelAddVideo(){
    this.router.navigate(['/vids'])
  }



  onVideoSelected(event:any){
    this.selectedVideo = event.target.files[0];
    
  }

}
