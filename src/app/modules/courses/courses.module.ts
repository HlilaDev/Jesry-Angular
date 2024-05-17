import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCourseComponent,
    AllCoursesComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }
