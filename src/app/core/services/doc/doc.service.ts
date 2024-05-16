import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http:HttpClient) { }


  //add new doc
  addDoc(newDoc:any){
    return this.http.post(API_URLS.docs.addDoc , newDoc)
  }

  getAllDocs(){
    return this.http.get(API_URLS.docs.getAllDocs)
  }

  deleteDoc(docId:any){
    return this.http.delete(API_URLS.docs.deleteDoc+docId)
  }

  editDoc(docId:any, newDoc:any){
    return this.http.put(API_URLS.docs.editDoc+docId,newDoc)
  }

  getDocById(docId:any){
    return this.http.get(API_URLS.docs.getDocById+docId)
  }

  seacrhDocsByQuerry(querry:any){
    return this.http.get(API_URLS.docs.searchDocsByQuerry+querry)
  }

  getDocsBySection(sectionId:string){
    return this.http.get(API_URLS.docs.getDocsBySection+sectionId)
  }

  getDocsByCourse(courseId:string){
    return this.http.get(API_URLS.docs.getDocByCourse+courseId)
  }
}
