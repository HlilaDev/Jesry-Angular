import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SectionService } from 'src/app/core/services/section/section.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})
export class SectionPageComponent  implements OnInit{

  section:any

  constructor( private userservices:UserService, private auth:AuthService , private router:Router , private sectionservices:SectionService){}
  ngOnInit(): void {
    this.getSectionByUser()
  }


  getSectionByUser(){
    const userId = this.auth.getUserIDFromToken()
    this.userservices.getUserById(userId).subscribe((res:any)=>{
      this.section = res?.section
    })
  }




addCourse(){
  this.router.navigate([`/courses/add-course/${this.section._id}`])
}


}
