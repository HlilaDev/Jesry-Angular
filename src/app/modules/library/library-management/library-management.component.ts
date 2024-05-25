import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-management',
  templateUrl: './library-management.component.html',
  styleUrls: ['./library-management.component.scss']
})
export class LibraryManagementComponent {

  constructor(private router:Router){}

  goToCategories(){
    this.router.navigate(['/my-library/categories'])
  }

  goToAuthors(){
    this.router.navigate(['/my-library/authors'])
  }

  goToBooks(){
    this.router.navigate(['/my-library/books'])
  }

  

}
