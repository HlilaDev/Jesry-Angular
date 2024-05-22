import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

const routes: Routes = [
  {path:'', component:AllQuotesComponent},
  {path:'add-quote' , component:AddQuoteComponent},
  {path:'edit-quote/:qid' , component:EditQuoteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
