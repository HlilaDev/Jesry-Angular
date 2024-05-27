import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraHomeComponent } from './extra-home/extra-home.component';
import { PdftowordComponent } from './converters/pdftoword/pdftoword.component';

const routes: Routes = [
  {path:'', component:ExtraHomeComponent},
  {path:'pdftoword', component:PdftowordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraRoutingModule { }
