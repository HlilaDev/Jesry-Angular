import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDocsComponent } from './all-docs/all-docs.component';
import { AddDocComponent } from './add-doc/add-doc.component';

const routes: Routes = [
  {path:'' , component:AllDocsComponent , children:[
    {path:'add-doc', component:AddDocComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
