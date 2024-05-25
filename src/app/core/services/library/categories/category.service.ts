import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from 'src/app/core/config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  addCategory(newCat:any){
    return this.http.post(API_URLS.library.categories.addCategory,newCat)
  }

  getCategoryById(catId:any){
    return this.http.get(API_URLS.library.categories.getCategoryById+catId)
  }

  deleteCategory(catId:any){
    return this.http.delete(API_URLS.library.categories.deleteCategory+catId)
  }

  updateCategory(catId:any , newCat:any){
    return this.http.put(API_URLS.library.categories.updateCategory+catId , newCat)
  }

  allCategories(){
    return this.http.get(API_URLS.library.categories.allCategories )
  }
}
