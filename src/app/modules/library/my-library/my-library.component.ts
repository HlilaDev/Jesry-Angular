import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/library/authors/author.service';
import { BookService } from 'src/app/core/services/library/books/book.service';
import { CategoryService } from 'src/app/core/services/library/categories/category.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit{

  books:any
  categories:any
  authors:any
  showSummary = false;
  hoverIndex: number = -1; // To track the index of the hovered card

  constructor(private router:Router , private bookservices:BookService , private authorservices:AuthorService , private categoryservices:CategoryService){}

  getAllBooks(){
    this.bookservices.getAllBooks().subscribe((res:any)=>{
      this.books = res
    })
  }

  getAllAuthors(){
    this.authorservices.getallAuthors().subscribe((res)=>{
      this.authors = res
    })
  }

  getAllCategories(){
    this.categoryservices.allCategories().subscribe((res:any)=>{
      this.categories = res
    })
  }

  ngOnInit(): void {
    this.getAllBooks()
    this.getAllAuthors()
    this.getAllCategories()
      }

  

      libraryManagement(){
      this.router.navigate(['/my-library/management'])
    }

    onSearch(event:Event){
      const query = (event.target as HTMLInputElement).value.toLowerCase();
     this.bookservices.seachBooksByQuerry(query).subscribe((res)=>{

      this.books = res

     })

    }
}
