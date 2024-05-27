import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CourseService } from 'src/app/core/services/course/course.service';
import { RelationService } from 'src/app/core/services/relations/relation.service';
import { SectionService } from 'src/app/core/services/section/section.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})
export class SectionPageComponent implements OnInit {
  section: any;
  courses: any;
  selectedCourseId:any;
  modalStatue:boolean = true;

  constructor(
    private userService: UserService,
    private relationService: RelationService,
    private courseService: CourseService,
    private authService: AuthService,
    private router: Router,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.getSectionByUser();
    this.getAllCourses();
  }

  getSectionByUser() {
    const userId = this.authService.getUserIDFromToken();
    this.userService.getUserById(userId).subscribe((res: any) => {
      this.section = res.section;
    });
  }

  getAllCourses() {
    this.courseService.getAllCourses().subscribe((res: any) => {
      this.courses = res;
    });
  }

  addCourseToSection(courseId: string) {
    const newRelation = { sectionId: this.section._id, courseId };
    this.relationService.sectionCourseAddRelation(newRelation).subscribe(() => {
      this.getSectionByUser(); // Refresh section data
    });
  }
}
