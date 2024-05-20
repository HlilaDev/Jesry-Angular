import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NoteService } from 'src/app/core/services/note/note.service';

@Component({
  selector: 'app-mynotes',
  templateUrl: './mynotes.component.html',
  styleUrls: ['./mynotes.component.scss']
})
export class MynotesComponent implements OnInit {
  notes:any;
  selectedColor:any;
  note={
    title:'',
    description:'',
    author:'',
    color: ''
  }

  constructor(private noteservices:NoteService , private auth:AuthService ,private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
this.getNotesById()  }

getNotesById(){
  const userId = this.auth.getUserIDFromToken();
  this.note.color = this.selectedColor; 
  this.noteservices.getNotesByauthorId(userId).subscribe((res)=>{
    this.notes = res
  })
}
  onAddNote(){
    this.note.author = this.auth.getUserIDFromToken()

    this.noteservices.addNote(this.note).subscribe((res)=>{
      this.cdr.detectChanges();
      
      this.getNotesById()
    })
  }

  deleteNote(noteId:string):void{
    this.noteservices.deleteNote(noteId).subscribe((res)=>{
      this.getNotesById()
    })

  }

}
