import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/library/categories/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit{

  Category:any 
  catId:any
  requiredRules:boolean=false;

  constructor(private categoryservices:CategoryService , private router:Router , private act:ActivatedRoute){}


  ngOnInit(): void {
    this.getCategoryById()
  }

  getCategoryById(){
    this.catId = this.act.snapshot.paramMap.get('cid')
    this.categoryservices.getCategoryById(this.catId).subscribe((res)=>{
      this.Category = res
    })

  }

  editCategory(){
    this.categoryservices.updateCategory(this.catId , this.Category).subscribe((res)=>{
      this.router.navigate(['books/categories'])
    })
  }


  cancelEdiCategory(){

    this.router.navigate(['books/categories'])


  }



}
