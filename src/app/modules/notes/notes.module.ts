import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { MynotesComponent } from './mynotes/mynotes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllNotesComponent,
    MynotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule
  ]
})
export class NotesModule { }
