import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDocsComponent } from './all-docs/all-docs.component';
import { AddDocComponent } from './add-doc/add-doc.component';
import { EditDocComponent } from './edit-doc/edit-doc.component';
import { adminModeratorGuard } from 'src/app/core/gurads/admin-moderator/admin-moderator.guard';

const routes: Routes = [

    {path:'', component:AllDocsComponent},
    {path:'add-doc', component:AddDocComponent, canActivate:[adminModeratorGuard]},
    {path:'edit-doc/:did' , component:EditDocComponent, canActivate:[adminModeratorGuard]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
