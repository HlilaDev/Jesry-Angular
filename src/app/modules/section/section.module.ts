import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { AddSectionComponent } from './add-section/add-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { FormsModule } from '@angular/forms';
import { SectionPageComponent } from './section-page/section-page.component';


@NgModule({
  declarations: [
    AddSectionComponent,
    EditSectionComponent,
    AllSectionsComponent,
    SectionPageComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    FormsModule
  ]
})
export class SectionModule { }
