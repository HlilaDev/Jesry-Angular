import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-quick-access',
  templateUrl: './admin-quick-access.component.html',
  styleUrls: ['./admin-quick-access.component.scss']
})
export class AdminQuickAccessComponent {

  constructor(private router:Router){}

  addBook(){
    this.router.navigate(['/my-library/books/add-book'])
  }

}
