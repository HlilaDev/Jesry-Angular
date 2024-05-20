import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NoteService } from 'src/app/core/services/note/note.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit{

  notes:any;

  constructor(private noteservices:NoteService , private auth:AuthService){}
  ngOnInit(): void {
    this.getAllNotes()
  }


  getAllNotes(){
    
  }

}
