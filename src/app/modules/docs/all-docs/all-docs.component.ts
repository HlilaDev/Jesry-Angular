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
  searchTerm:any='';

  constructor( private docService: DocService, private router: Router ) {}

  ngOnInit(): void {
    this.getDocs(this.currentPage);
  }

  getDocs(page: number): void {
    this.docService.getAllDocs(page).subscribe((res: any) => {
      this.docs = res.docs;
      this.totalPages = res.totalPages;
      this.currentPage = res.currentPage;
    });
  }

  addNewDoc(): void {
    this.router.navigate(['/docs/add-doc']);
  }

  EditDoc(docId: any): void {
    this.router.navigate([`/docs/edit-doc/${docId}`])
  }

  DeleteDoc(docId: any): void {
    this.docService.deleteDoc(docId).subscribe((res:any)=>{
      this.getDocs(this.currentPage)
    })
  }

  // Method to handle page change
  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.getDocs(page);
    }
  }

  searchDoc(): void {
    if (this.searchTerm.trim() === '') {
      // If the search term is empty, load all documents
      this.getDocs(this.currentPage);
    } else {
      // Perform the search
      this.docService.seacrhDocsByQuerry(this.searchTerm).subscribe((res: any) => {
        this.docs = res.docs;
        this.totalPages = res.totalPages || 1; // Default to 1 if not provided
        this.currentPage = res.currentPage || 1; 
        console.log(this.docs);
        
      });
    }
  }
}
