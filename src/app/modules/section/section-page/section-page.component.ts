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
  sectionId:any

  constructor(private act:ActivatedRoute , private userservices:UserService , private router:Router , private sectionservices:SectionService){}
  ngOnInit(): void {
    this.getSectionById()
  }


getSectionById(){
  this.sectionId = this.act.snapshot.paramMap.get('sid')

  this.sectionservices.getSectionById(this.sectionId).subscribe((res)=>{
    this.section = res
  })
}


}
