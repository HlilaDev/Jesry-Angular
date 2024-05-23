import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DocService } from 'src/app/core/services/doc/doc.service';

@Component({
  selector: 'app-all-docs',
  templateUrl: './all-docs.component.html',
  styleUrls: ['./all-docs.component.scss']
})
export class AllDocsComponent implements OnInit {
  role: any;
  docs: any[] = [];


  constructor(private auth: AuthService, private docservices: DocService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDocs();
  }

  getAllDocs(): void {
    this.docservices.getAllDocs().subscribe((res: any) => {
      this.docs = res;
      console.log(this.docs);
      
    });
  }

 

  addNewDoc(): void {
    this.router.navigate(['/docs/add-doc']);
  }

  EditUser(docId: any) {
    // Implement edit functionality
  }

  DeleteUser(docId: any) {
    // Implement delete functionality
  }
}
