import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  //login
  login(user:any){
    return this.http.post(API_URLS.login , user)

  }

  //register
  register(newUser:any){
    return this.http.post(API_URLS.register , newUser)
  }

  //get Role By Id
  getRoleById(userId:string){
    return this.http.get(API_URLS.role)
  }
    
  
}
