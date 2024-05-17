import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {path:''  , component:AllCoursesComponent},
  {path:'add-course' , component:AddCourseComponent},
  {path:'edit-course' , component:EditCourseComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
