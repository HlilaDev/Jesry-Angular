import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraRoutingModule } from './extra-routing.module';
import { ExtraHomeComponent } from './extra-home/extra-home.component';
import { PdftowordComponent } from './converters/pdftoword/pdftoword.component';


@NgModule({
  declarations: [
    ExtraHomeComponent,
    PdftowordComponent
  ],
  imports: [
    CommonModule,
    ExtraRoutingModule
  ]
})
export class ExtraModule { }
