import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookStoreComponent } from './book-store/book-store.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { AllCategoriesComponent } from './categories/all-categories/all-categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { AllAuthorsComponent } from './authors/all-authors/all-authors.component';

const routes: Routes = [
  {path:'' , component:BookStoreComponent},
  {path:'add-book', component:AddBookComponent},
  {path:'edit-book/:bid' , component:EditBookComponent},
  {path:'edit-category/:cid' , component:EditCategoryComponent},
  {path:'categories' , component:AllCategoriesComponent},
  {path:'add-category' , component:AddCategoryComponent},
  {path:'add-author' , component:AddAuthorComponent},
  {path:'edit-author/:aid' , component:EditAuthorComponent},
  {path:'authors' , component:AllAuthorsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
