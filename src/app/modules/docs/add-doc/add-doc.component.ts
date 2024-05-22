import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DocService } from 'src/app/core/services/doc/doc.service';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.scss']
})
export class AddDocComponent implements  OnInit{

  selectedDoc:any
  Doc={
    title:"",
    description:"",
    section:"",
    course:"",
    author:"",
    tags:"",

  }
  categories:any
  role:any;
  sections:any

  constructor(private auth:AuthService , private docservice:DocService , private router:Router , private sectionservices:SectionService){
    this.getRole()
  }
  ngOnInit(): void {
    this.getAllSections()
  }

  addDoc(){
    const authorId = this.auth.getUserIDFromToken()
    const docForm = new FormData()
    docForm.append('title', this.Doc.title)
    docForm.append('description', this.Doc.description)
    docForm.append('section', this.Doc.section)
    docForm.append('course', this.Doc.course)
    docForm.append('tags', this.Doc.tags)
    docForm.append('author', authorId)
    docForm.append('pdf', this.selectedDoc)
    this.docservice.addDoc(docForm).subscribe((res)=>{
      this.router.navigate(['/allDocs'])
    })
  }

  onDocSelected(event:any){
    this.selectedDoc = event.target.files[0]
    
  }

  getAllSections(){
    this.sectionservices.getAllSections().subscribe((res)=>{
      this.sections  = res     
    })
  }

  onLevelChange(event: any) {
    const selectedLevel = event.target.value;
    if (selectedLevel) {
      this.getSectionsByLevel(selectedLevel);
    }
  }

  getSectionsByLevel(level:string){
    this.sectionservices.getSectionByLevel(level).subscribe((res)=>{
      this.sections = res
    })
  }

  cancelAddDoc(){
    this.router.navigate(['/docs'])
  }

  getRole(){
    this.role = this.auth.getUserRoleFromToken()
   }

}
