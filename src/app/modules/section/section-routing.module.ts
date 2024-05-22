import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { adminModeratorGuard } from 'src/app/core/gurads/admin-moderator/admin-moderator.guard';
import { SectionPageComponent } from './section-page/section-page.component';

const routes: Routes = [
  {path:'', component:AllSectionsComponent},
  {path:'add-section', component:AddSectionComponent, canActivate:[adminModeratorGuard]},
  {path:'edit-section/:sid', component:EditSectionComponent, canActivate:[adminModeratorGuard]},
  {path:'section/:sid', component:SectionPageComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
