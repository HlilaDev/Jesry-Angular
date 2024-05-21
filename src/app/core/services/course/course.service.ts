import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  addCourse(newCourse:Course){
    return this.http.post(API_URLS.courses.addCourse,newCourse)
  }

  getAllCourses(){
    return this.http.get(API_URLS.courses.allCourses)
  }

  getCourseById(courseId:string){
    return this.http.get(API_URLS.courses.getCourseById+courseId)
  }

  deleteCourse(courseId:string){
    return this.http.delete(API_URLS.courses.deleteCourse+courseId)
  }

  updateCourse(courseId:string , newCourse:Course){
    return this.http.put(API_URLS.courses.updateCourse+courseId,newCourse)
  }

  getCoursesBySection(sectionId:string){
    return this.http.get(API_URLS.courses.coursesBySection+sectionId)
  }


  onSubscribe(userId:any,courseId:any){
    return this.http.post(`${API_URLS.courses.onSubscribe}/${userId}/${courseId}` , {})
  }

  onUnSubscribe(userId:any,courseId:any){
    return this.http.delete(`${API_URLS.courses.onUnSubscribe}/${userId}/${courseId}`)
  }


  isSubscribed(userId:any,courseId:any){
    return this.http.get(`${API_URLS.courses.isSubscribed}/${userId}/${courseId}`)
  }
}
