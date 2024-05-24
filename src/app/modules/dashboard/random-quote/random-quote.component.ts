import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/core/services/quote/quote.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss']
})
export class RandomQuoteComponent implements OnInit{

  quote:any

  constructor(private quoteservices:QuoteService){}
  ngOnInit(): void {
    this.getRandomeQuote()
  }

  getRandomeQuote(){
    this.quoteservices.getRandomQuote().subscribe((res)=>{
      this.quote = res
    })
  }
}
