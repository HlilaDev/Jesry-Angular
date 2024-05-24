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
  totalPages: any;
  currentPage: number = 1;

  constructor( private docService: DocService, private router: Router) {}

  ngOnInit(): void {
    this.getDocs(this.currentPage);
  }

  getDocs(page: number): void {
    this.docService.getAllDocs(page).subscribe((res: any) => {
      this.docs = res.docs;
      this.totalPages = res.totalPages;
      this.currentPage = res.currentPage;
      console.log(this.docs);
    });
  }

  addNewDoc(): void {
    this.router.navigate(['/docs/add-doc']);
  }

  EditUser(docId: any): void {
    this.router.navigate([`/docs/edit-doc/${docId}`])
  }

  DeleteUser(docId: any): void {
    // Implement delete functionality
  }

  // Method to handle page change
  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.getDocs(page);
    }
  }
}
