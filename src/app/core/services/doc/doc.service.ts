import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http:HttpClient) { }


  //add new doc
  addDoc(newDoc:any){
    return this.http.post(API_URLS.docs.addDoc , newDoc)
  }

  // Get all docs with pagination
  getAllDocs(page: number = 1, limit: number = 8): Observable<any> {
    const params = new HttpParams().set('page', page.toString()).set('limit', limit.toString());
    return this.http.get(API_URLS.docs.getAllDocs, { params });
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
