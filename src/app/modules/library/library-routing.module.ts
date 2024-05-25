import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { AllCategoriesComponent } from './categories/all-categories/all-categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { AllAuthorsComponent } from './authors/all-authors/all-authors.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { MyLibraryComponent } from './my-library/my-library.component';

const routes: Routes = [
  {path:'' , component:MyLibraryComponent},
  {path:'books/add-book', component:AddBookComponent},
  {path:'books/edit-book/:bid' , component:EditBookComponent},
  {path:'categories/edit-category/:cid' , component:EditCategoryComponent},
  {path:'categories' , component:AllCategoriesComponent},
  {path:'categories/add-category' , component:AddCategoryComponent},
  {path:'authors/add-author' , component:AddAuthorComponent},
  {path:'authors/edit-author/:aid' , component:EditAuthorComponent},
  {path:'authors' , component:AllAuthorsComponent},
  { path: 'management', component: LibraryManagementComponent },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
