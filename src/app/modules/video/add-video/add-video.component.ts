import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/core/models/video.models';
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
  categories:any
  playlists:any
  courses:any
  sections:any

  constructor(private act:ActivatedRoute ,private sectionservices:SectionService , private videoservices:VideoService ,private courseservices:CourseService, private auth:AuthService , private router:Router){}
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
    const authorId = this.act.snapshot.paramMap.get('uid')
    videoForm.append('title', this.video.title.toString());
    videoForm.append('description', this.video.description.toString());
    videoForm.append('section', this.video.section);
    videoForm.append('course', this.video.course);
    videoForm.append('author', this.video.author);

    if (this.video.playlist != ''){
      videoForm.append('playlist', this.video.playlist);
    }
    
    videoForm.append('tags', this.video.tags);
    videoForm.append('video', this.selectedVideo);
    if (authorId !== null) {
      videoForm.append('author', authorId);
    } else {
      // Handle the case where userId is null or undefined
    }

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
