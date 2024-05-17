import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';

const routes: Routes = [
  {path:'', component:AllSectionsComponent},
  {path:'add-section', component:AddSectionComponent},
  {path:'edit-section', component:EditSectionComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
