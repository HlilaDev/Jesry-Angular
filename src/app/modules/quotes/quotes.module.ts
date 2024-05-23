import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { SingleQuoteComponent } from './single-quote/single-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AllQuotesComponent,
    SingleQuoteComponent,
    AddQuoteComponent,
    EditQuoteComponent,
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    FormsModule,
    NgxPaginationModule

  ]
})
export class QuotesModule { }
