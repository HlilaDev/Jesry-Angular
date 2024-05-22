import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/core/services/quote/quote.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent {

  Quote={
    description:"",
    author:""
  };

  constructor(private quoteservice:QuoteService , private router:Router){}



  addQuote(){
    this.quoteservice.addQuote(this.Quote).subscribe((res)=>{
   this.router.navigate(['/quotes'])
    })
  }

  cancelAddQuote(){
    this.router.navigate(['/quotes'])
  }

}
