import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  addNote(newNote:any){
    return this.http.post(API_URLS.notes.addNote, newNote)
  }

 getAllNotes(){
 return this.http.get(API_URLS.notes.getAllNotes)
 }

 getNoteById(noteId:any){
  return this.http.get(API_URLS.notes.getNoteById+noteId)
  
 }
 editNote(noteId:any , newNote:any){
  return this.http.put(API_URLS.notes.editNote+noteId , newNote)
 }

 deleteNote(noteId:any){
  return this.http.delete(API_URLS.notes.deleteNote+noteId)
 }
 getNotesByauthorId(userId:any){
  return this.http.get(API_URLS.notes.getNoteByAuthorId+userId)
 }
}

























































