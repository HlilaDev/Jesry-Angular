import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-add-course-bysection',
  templateUrl: './add-course-bysection.component.html',
  styleUrls: ['./add-course-bysection.component.scss']
})
export class AddCourseBysectionComponent implements OnInit{

  courses:any
  sectionId:any
  section:any

  constructor(private router:Router , private act:ActivatedRoute , private sectionservices:SectionService , private courseservices:CourseService){}
  ngOnInit(): void {
    this.getSectionById()
    this.getAllCourses()
  }

  getAllCourses(){
    this.courseservices.getAllCourses().subscribe((res:any)=>{
      this.courses = res
    })
  }

  getSectionById(){
    this.sectionId = this.act.snapshot.paramMap.get('sid');
    this.sectionservices.getSectionById(this.sectionId).subscribe((res:any)=>{
      this.section = res
    })
  }




  cancelAddCourse(){
    this.router.navigate(['/sections/my-section'])
  }

  addCourse(){}

}
