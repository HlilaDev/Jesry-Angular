import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/library/authors/author.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent implements  OnInit{

  authors:any;

  constructor(private authorservices:AuthorService , private router:Router){}


  ngOnInit(): void {
    this.getAllAuthors()
  }

  getAllAuthors(){
    this.authorservices.getallAuthors().subscribe((res)=>{
      this.authors = res
    })
  }

}
