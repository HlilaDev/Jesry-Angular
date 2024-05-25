import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/library/authors/author.service';
import { BookService } from 'src/app/core/services/library/books/book.service';
import { CategoryService } from 'src/app/core/services/library/categories/category.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  requiredRules:boolean=true;
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

  constructor(private bookservices:BookService, private router:Router , private categorieservices:CategoryService , private authorservices:AuthorService){}
  ngOnInit(): void {
    this.getAllCategories()
    this.getAllAuthors()
  }


  addBook(){
    const myForm = new FormData()

    myForm.append('title', this.Book.title);
    myForm.append('summary' , this.Book.summary);
    myForm.append('author', this.Book.author);
    myForm.append('category', this.Book.category);
    myForm.append('pages', this.Book.pages)
    myForm.append('pdf' , this.selectedBook)

    this.bookservices.addbook(myForm).subscribe((res)=>{
      this.router.navigate(['/my-library'])
    })
  }

  getAllCategories(){
    this.categorieservices.allCategories().subscribe((res)=>{
      this.categories = res
    })
  }

  getAllAuthors(){
    this.authorservices.getallAuthors().subscribe((res:any)=>{
      this.authors = res
    })
  }

  cancelAddBook(){
    this.router.navigate(['/my-library'])
  }

  onSectionChange(event:any){
    this.selectedCategory = event.target.value
  }

  onBookSelected(event:any){
    this.selectedBook = event.target.value
  }

}
