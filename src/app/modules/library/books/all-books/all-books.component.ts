import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/services/library/books/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit{

  books:any
  categories:any
  authors:any

  constructor(private router:Router , private bookservices:BookService){}

  ngOnInit(): void {
    this.getAllBooks()
      }
  

  getAllBooks(){
    this.bookservices.getAllBooks().subscribe((res:any)=>{
      this.books = res
      console.log(this.books);
      
    })
  }


  onAddBook(){
    this.router.navigate(['/my-library/books/add-book'])
  }
  onEditBook(bookId:any){
    this.router.navigate([`/my-library/books/edit-book/${bookId}`])
  }
  onDeleteBook(bookId:any){
    this.bookservices.deletebook(bookId).subscribe((res)=>{
      this.getAllBooks()
    })
  }
}
