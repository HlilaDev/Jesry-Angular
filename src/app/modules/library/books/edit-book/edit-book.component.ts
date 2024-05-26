import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/library/authors/author.service';
import { BookService } from 'src/app/core/services/library/books/book.service';
import { CategoryService } from 'src/app/core/services/library/categories/category.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  Book:any;
  authors:any;
  categories:any;
  requiredRules:boolean=true ;

  constructor(private bookservices:BookService ,private categoryservices:CategoryService , private act:ActivatedRoute , private authorservices:AuthorService , private router:Router){}


  ngOnInit(): void {
    this.getBookById()
    this.getAllAuthors()
    this.getAllCategories()
  }

  getBookById(){
    const bookId=this.act.snapshot.paramMap.get('bid')
    this.bookservices.getbookById(bookId).subscribe((res)=>{
      this.Book = res
      console.log(this.Book);
      
    })
  }

  getAllCategories(){
    this.categoryservices.allCategories().subscribe((res:any)=>{
      this.categories = res
    })
  }

  getAllAuthors(){
    this.authorservices.getallAuthors().subscribe((res:any)=>{
      this.authors = res
    })
  }



  onSectionChange(event:Event){}

  cancelEditBook(){
    this.router.
    
    navigate(['/my-library/books'])
  }

  addBook(){
    this.router.navigate(['/my-library/books/add-book'])
  }

}
