import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { adminModeratorGuard } from 'src/app/core/gurads/admin-moderator/admin-moderator.guard';
import { AddCourseBysectionComponent } from './add-course-bysection/add-course-bysection.component';

const routes: Routes = [
  {path:''  , component:AllCoursesComponent},
  {path:'add-course' , component:AddCourseComponent, canActivate:[adminModeratorGuard]},
  {path:'add-course/:sid' , component:AddCourseBysectionComponent, canActivate:[adminModeratorGuard]},
  {path:'edit-course/:cid' , component:EditCourseComponent, canActivate:[adminModeratorGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
