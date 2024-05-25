import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/library/categories/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  Category={
    name:"",
    description:""
  }
  selectedImage:any;
  requiredRules:boolean=true;

  constructor(private categoryservices:CategoryService , private router:Router){}

  addCategory(){
    const myForm = new FormData()
    myForm.append('name', this.Category.name)
    myForm.append('description', this.Category.description)
    myForm.append('image', this.selectedImage)
    this.categoryservices.addCategory(myForm).subscribe((res)=>{
      this.router.navigate(['/my-library/categories'])
    })
  }

  cancelAddCategory(){
    this.router.navigate(['/my-library/categories'])

  }

  onBookSelected(event:any){
    this.selectedImage = event.target.value
  }

}
