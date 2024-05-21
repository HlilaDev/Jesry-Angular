import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http:HttpClient) { }

  getFavListById(userId:any){
   return this.http.get(API_URLS.favs.getFavsByUserId+userId)

  }


  addFav(newVideo:any ,userId:any){
    
    return this.http.post(API_URLS.favs.addFav+newVideo , userId)
  }

  removeFav(newVideo:any ,userId:string){
    return this.http.post(API_URLS.favs.removeFav+newVideo , userId)
  }
}