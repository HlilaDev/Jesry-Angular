import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { MynotesComponent } from './mynotes/mynotes.component';

const routes: Routes = [
  {path:'' , component:MynotesComponent},
  {path:'all-notes' , component:AllNotesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
