import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/core/config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


    //add new book
    addbook(newBook:any){
      return this.http.post(API_URLS.library.books.addBook,newBook)
    }

    getAllBooks(){
      return this.http.get(API_URLS.library.books.allBooks)
    }
  
    //edit book
    editbook(bookId:any , updatedbook:any){
      return this.http.put(API_URLS.library.books.updateBook+bookId,updatedbook)
    }
    //delete book
    deletebook(bookId:any ){
      return this.http.delete(API_URLS.library.books.deleteBook+bookId)
    }
      //delete book
      getbookById(bookId:any ){
        return this.http.get(API_URLS.library.books.getBookById+bookId)
      }
}
