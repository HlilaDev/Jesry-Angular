import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/core/config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }

  //add new author
  addAuthor(newAuthor:any){
    return this.http.post(API_URLS.library.authors.addAuthor,newAuthor)
  }

  //edit author
  editAuthor(authorId:any , updatedAuthor:any){
    return this.http.put(API_URLS.library.authors.updateAuthor+authorId,updatedAuthor)
  }
  //delete author
  deleteAuthor(authorId:any ){
    return this.http.delete(API_URLS.library.authors.deleteAuthor+authorId)
  }
    //delete author
    getAuthorById(authorId:any ){
      return this.http.get(API_URLS.library.authors.getAuthorById+authorId)
    }

getallAuthors(){
  return this.http.get(API_URLS.library.authors.allAuthors)
}


}
