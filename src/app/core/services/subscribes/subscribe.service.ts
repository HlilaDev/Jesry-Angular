import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http:HttpClient) { }




  getSubscribesById(userId:any){
    return this.http.get(`${API_URLS.subscribes.getSubscribesById}/${userId}`)

  }

}
