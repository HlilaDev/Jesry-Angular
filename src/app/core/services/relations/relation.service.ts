import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private http:HttpClient) { }

  //Courses-Sections relations:
  //-Add relation
  sectionCourseAddRelation(newRelation:any){
    return this.http.post(API_URLS.relations.courseSection.addRelation,newRelation)
  }

  //-Add relation
  sectionCourseRemoveRelation(sectionId:any , courseId:any){
    return this.http.delete(API_URLS.relations.courseSection.removeRelation,{})
  }
}
