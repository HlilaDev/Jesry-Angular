import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { CourseService } from 'src/app/core/services/course/course.service';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit{

  course:Course={
    title:'',
    section:[]
  }

  sections:any;

  constructor(private courseservice:CourseService , private sectionservices:SectionService , private router:Router){}

  ngOnInit(): void {
    this.getAllsections() 
   }



  getAllsections(){
    this.sectionservices.getAllSections().subscribe((res)=>{
      this.sections = res
    })
  }
  addCourse(){
    this.courseservice.addCourse(this.course).subscribe((res)=>{
      this.router.navigate(['/courses'])

    })
  }
  cancelAddCourse(){
    this.router.navigate(['/courses'])
  }

}
