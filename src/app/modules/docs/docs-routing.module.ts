import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDocsComponent } from './all-docs/all-docs.component';
import { AddDocComponent } from './add-doc/add-doc.component';
import { EditDocComponent } from './edit-doc/edit-doc.component';

const routes: Routes = [

    {path:'', component:AllDocsComponent},
    {path:'add-doc', component:AddDocComponent},
    {path:'edit-doc' , component:EditDocComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
