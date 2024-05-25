import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/services/library/books/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  requiredRules:boolean=false;
  Book={
    title:"",
    summary:"",
    author:"",
    category:"",
    pages:""
  }

  categories:any
  selectedCategory:any;
  authors:any
  selectedBook:any

  constructor(private bookservices:BookService, private router:Router){}


  addBook(){
    const myForm = new FormData()

    myForm.append('title', this.Book.title);
    myForm.append('summary' , this.Book.summary);
    myForm.append('author', this.Book.author);
    myForm.append('category', this.Book.category);
    myForm.append('pages', this.Book.pages)
    myForm.append('pdf' , this.selectedBook)

    this.bookservices.addbook(myForm).subscribe((res)=>{
      this.router.navigate(['/book'])
    })
  }

  cancelAddBook(){
    this.router.navigate(['/books'])
  }

  onSectionChange(event:any){
    this.selectedCategory = event.target.value
  }

  onBookSelected(event:any){
    this.selectedBook = event.target.value
  }

}
