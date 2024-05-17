import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit{

  courseId:any
  course:any;
  sections:any;
  constructor(private courseservices:CourseService ,private sectionsservices:SectionService, private router:Router , private act:ActivatedRoute){}
  ngOnInit(): void {
this.getCourseById()  
this.getAllSections()

}

getAllSections(){
  this.sectionsservices.getAllSections().subscribe((res)=>{
    this.sections = res
  })
}

 getCourseById(){
  this.courseId = this.act.snapshot.paramMap.get('cid')
  this.courseservices.getCourseById(this.courseId).subscribe((res)=>{
    this.course = res
  })




 }

  editCourse(){
    this.courseservices.updateCourse(this.courseId , this.course).subscribe((res)=>{
      this.router.navigate(['/courses'])

    })

  }

  cancelEditCourse(){
    this.router.navigate(['/courses'])

  }

}
