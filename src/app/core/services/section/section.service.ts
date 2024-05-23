import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http:HttpClient) { }


  addSection(newSection:any){
    return this.http.post(API_URLS.sections.addSection,newSection)
  }

  getAllSections(){
    return this.http.get(API_URLS.sections.allSections)
  }

  editSection(sectionId:any,updatedSection:any){
    return this.http.put(API_URLS.sections.updateSection+sectionId,updatedSection)
  }

  deleteSection(sectionId:any){
    return this.http.delete(API_URLS.sections.deleteSection+sectionId)
  }

  getSectionByLevel(level:string){
    return this.http.get(API_URLS.sections.getSectionsByLevel+level)
  }

  getSectionById(sectionId:string){
    return this.http.get(API_URLS.sections.getSectionById+sectionId)
  }


}
