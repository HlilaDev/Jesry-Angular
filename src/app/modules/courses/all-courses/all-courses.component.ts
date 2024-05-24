import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent {

  courses:any;

  constructor(private courseservicse:CourseService , private router:Router){}


  ngOnInit(): void {
    this.getAllCourses()
  }


  getAllCourses(){
    this.courseservicse.getAllCourses().subscribe((res)=>{
      this.courses = res
      console.log(this.courses);
      
    })
  }

  onAddCourse(){

    this.router.navigate(['/courses/add-course'])
  }
  onEdit(courseId:string){
    this.router.navigate([`/courses/edit-course/${courseId}`])
  }

  onDelete(courseId:string){
    this.courseservicse.deleteCourse(courseId).subscribe((res)=>{
      this.getAllCourses()
    })
  }

}

