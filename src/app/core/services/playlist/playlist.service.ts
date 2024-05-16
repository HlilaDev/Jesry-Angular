import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http:HttpClient) { }

  addPlaylist(newPlaylist:any){
    return this.http.post(API_URLS.playlists.addPlaylist, newPlaylist)
  }

 getAllPlaylists(){
 return this.http.get(API_URLS.playlists.allPlaylists)
 }

 getPlaylistById(PlaylistId:any){
  return this.http.get(API_URLS.playlists.getPlaylistById+PlaylistId)
  
 }
 editPlaylist(PlaylistId:any , newPlaylist:any){
  return this.http.put(API_URLS.playlists.editPlaylist , newPlaylist)
 }

 deletePlaylist(PlaylistId:any){
  return this.http.delete(API_URLS.playlists.deletePlaylist+PlaylistId)
 }

}
