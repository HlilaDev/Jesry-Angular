import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/core/services/library/authors/author.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss']
})
export class EditAuthorComponent implements OnInit {
  Author:any;
  requiredRules:boolean=true;

  constructor(private authorservices:AuthorService , private router:Router , private act:ActivatedRoute){}
  ngOnInit(): void {
    this.getAuthorById()
  }

  getAuthorById(){
    const authorId=this.act.snapshot.paramMap.get('aid')
    this.authorservices.getAuthorById(authorId).subscribe((res:any)=>{
      this.Author=res
    })
  }



  editAuthor(){}

  cancelEditAuthor(){
    this.router.navigate(['/books/authors'])
  }
}
