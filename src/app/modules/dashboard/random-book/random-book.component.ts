import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/library/books/book.service';

@Component({
  selector: 'app-random-book',
  templateUrl: './random-book.component.html',
  styleUrls: ['./random-book.component.scss']
})
export class RandomBookComponent implements OnInit{
  Book:any


  constructor(private bookservices:BookService){}
  ngOnInit(): void {
    this.getRandomBook()
  }

  getRandomBook(){
    this.bookservices.getRandomBook().subscribe((res:any)=>{
      this.Book = res
    })
  }

}
