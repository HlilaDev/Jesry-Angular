import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) { }

  //add new Video
  addVideo(newVideo:any){
    return this.http.post(API_URLS.videos.addVideo, newVideo)
  }

  getAllVideos(page: number, pageSize: number){
    return this.http.get(`${API_URLS.videos.allVideos}?page=${page}&pageSize=${pageSize}`)
  }

  editVideo(videoId:any,newVideo:any){
    return this.http.put(API_URLS.videos.editVideo+videoId,newVideo)
  }

  deleteVideo(videoId:any){
    return this.http.delete(API_URLS.videos.deleteVideo+videoId)
  }

  getVideoById(videoId:any){
   return this.http.get(API_URLS.videos.getVideoById+videoId)
  }


  getVideosByCourse(courseId:string): Observable<any>{
    return this.http.get(API_URLS.videos.getVideosByCourseId+courseId)
  }

  getVideosByPlaylistId(playlistId:any){
    return this.http.get(API_URLS.videos.VideosByPlaylist+playlistId)
  }

  totalVideos(){
    return this.http.get(API_URLS.videos.totalVideos)
  }

  getFullVideosById(videoId:any){
    return this.http.get(API_URLS.videos.getFullVideoById+videoId)
  }

  seachVideosByQuerry(querry:string): Observable<any> {
    return this.http.get(API_URLS.videos.searchVideoByQuerry+querry)
  }

  addLike(videoId:any){
    return this.http.post(API_URLS.likes.addLike,videoId)
  }

  removeLike(videoId:any){
    return this.http.post(API_URLS.likes.removeLike,videoId)
  }

  addFav(videoId:any){
    return this.http.post(API_URLS.favs.addFav,videoId)
  }

  removeFav(videoId:any){
    return this.http.post(API_URLS.favs.removeFav,videoId)
  }
}
