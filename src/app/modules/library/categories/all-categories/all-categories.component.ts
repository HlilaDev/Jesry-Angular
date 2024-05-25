import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/library/categories/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit{

  categories:any

  constructor(private categoryservices:CategoryService , private router:Router){}
  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoryservices.allCategories().subscribe((res)=>{
      this.categories = res
    })

  }


  onDeleteCategory(catId:any){
    this.categoryservices.deleteCategory(catId).subscribe((res)=>{
      this.getAllCategories()
    })
  }

  onAddCategory(){
    this.router.navigate(['/my-library/categories/add-category'])
  }


  onEditCategory(catId:any){
    this.router.navigate([`/my-library/categories/edit-category/${catId}`])
  }
}
