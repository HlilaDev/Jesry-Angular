import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from 'src/app/core/services/quote/quote.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {

  Quote:any
  QuoteId= this.act.snapshot.paramMap.get('qid')
  

  constructor(private quoteservice:QuoteService , private act:ActivatedRoute , private router:Router){}


  ngOnInit(): void {
    this.getQuoteById(this.QuoteId)
  }

  getQuoteById(id:any){
       this.quoteservice.getQuoteById(id).subscribe((res)=>{
      this.Quote = res
    })
  }



  editQuote(){
   
        this.quoteservice.editQuote(this.QuoteId, this.Quote).subscribe((res) => {
          this.router.navigate(['/quotes'])
         
        })
        
       
  }

  cancelEdit(){
    this.router.navigate(['/quotes'])
  }

}
