import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/services/library/books/book.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit{

  books:any
  categories:any
  authors:any


  constructor(private router:Router , private bookservices:BookService){}

  getAllBooks(){
    this.bookservices.getAllBooks().subscribe((res:any)=>{
      this.books = res
      console.log(this.books);
      
    })

  }


  ngOnInit(): void {
    this.getAllBooks()
      }

  

    liraryManagement(){
      this.router.navigate(['/my-library/management'])
    }

    onSearch(event:Event){

    }
}
