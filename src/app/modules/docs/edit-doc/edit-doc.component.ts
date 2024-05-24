import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/core/services/course/course.service';
import { DocService } from 'src/app/core/services/doc/doc.service';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-edit-doc',
  templateUrl: './edit-doc.component.html',
  styleUrls: ['./edit-doc.component.scss']
})
export class EditDocComponent implements OnInit {
Doc:any ;
allCourses:any
sections:any
selectedLevel:any
requiredRules:boolean=false;

  constructor(private router:Router , private act:ActivatedRoute , private docservices:DocService , private courseservices:CourseService , private sectionservices:SectionService){}


  ngOnInit(): void {
    this.getDocById()
  }

  getDocById(){
    const docId = this.act.snapshot.paramMap.get('did')
    this.docservices.getDocById(docId).subscribe((res:any)=>{
      this.Doc = res
    })

  }

  editDoc(){}

  cancelEditDoc(){
    this.router.navigate(['/docs'])
  }

  onLevelChange(event:any){
    this.selectedLevel = event.target.value
  }

  onSectionChange(event:any){}
}
