import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/library/authors/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent {

  Author={
    firstName:"",
    lastName:"",
    biography:""
  }

  requiredRules:boolean=true;
  selectedImage:any

  constructor(private authorservices:AuthorService , private router:Router){}

  onImageSelected(event:any){
    this.selectedImage = event.target.value
  }

  addAuthor(){
    const myForm = new FormData()
    myForm.append("firstName" , this.Author.firstName)
    myForm.append("lastName" , this.Author.lastName)
    myForm.append("biography" , this.Author.biography)
    myForm.append("image" , this.selectedImage)

    this.authorservices.addAuthor(myForm).subscribe((res)=>{
      this.router.navigate(['/my-library/authors'])

    })


  }

  cancelAddAuthor(){
    this.router.navigate(['/my-library/authors'])
  }


}
