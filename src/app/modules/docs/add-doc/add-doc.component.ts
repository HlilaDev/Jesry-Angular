import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DocService } from 'src/app/core/services/doc/doc.service';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.scss']
})
export class AddDocComponent {

  selectedDoc:any
  Doc={
    title:"",
    description:"",
    category:"",
    author:"",
    tags:"",

  }
  categories:any
  role:any;

  constructor(private auth:AuthService , private docservice:DocService , private router:Router){
    this.getRole()
  }

  addDoc(){
    const authorId = this.auth.getUserIDFromToken()
    const docForm = new FormData()
    docForm.append('title', this.Doc.title)
    docForm.append('description', this.Doc.description)
    docForm.append('category', this.Doc.category)
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

  cancelAddDoc(){
    this.router.navigate(['/docs'])
  }

  getRole(){
    this.role = this.auth.getUserRoleFromToken()
   }

}
