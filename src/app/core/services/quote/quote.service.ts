import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../config/api_urls';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http:HttpClient) { }

  
addQuote(newQuote:any){
  return this.http.post(API_URLS.quotes.addQuote , newQuote)
}

 getAllQuotes(){
 return this.http.get(API_URLS.quotes.getAllQuotes)
 }

 getQuoteById(QuoteId:any){
  return this.http.get(API_URLS.quotes.getQuoteById+QuoteId)
  
 }
 editQuote(QuoteId:any , newQuote:any){
  return this.http.put(API_URLS.quotes+QuoteId , newQuote)
 }

 deleteQuote(QuoteId:any){
  return this.http.delete(API_URLS.quotes.deleteQuote+QuoteId)
 }

}
