import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from 'src/app/core/services/quote/quote.service';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html',
  styleUrls: ['./all-quotes.component.scss']
})
export class AllQuotesComponent {

  quotes: any;
  page: number = 1;

  constructor(private quoteservice: QuoteService, private router: Router) {}

  ngOnInit(): void {
    this.getAllQuote();
  }

  getAllQuote() {
    this.quoteservice.getAllQuotes().subscribe((res) => {
      this.quotes = res;
    });
  }

  onAddQuote() {
    this.router.navigate(['/quotes/add-quote']);
  }

  onDeleteQuote(id: any) {
    this.quoteservice.deleteQuote(id).subscribe((res) => {
      this.getAllQuote();
    });
  }

  onEditQuote(id: any) {
    this.router.navigate([`/quotes/edit-quote/${id}`]);
  }
}
