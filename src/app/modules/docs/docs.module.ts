import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { AddDocComponent } from './add-doc/add-doc.component';
import { EditDocComponent } from './edit-doc/edit-doc.component';
import { AllDocsComponent } from './all-docs/all-docs.component';


@NgModule({
  declarations: [
    AddDocComponent,
    EditDocComponent,
    AllDocsComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule
  ]
})
export class DocsModule { }
