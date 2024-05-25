import { Component } from '@angular/core';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent {
  books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Classic',
      image: 'https://example.com/gatsby.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      image: 'https://example.com/mockingbird.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
      image: 'https://example.com/1984.jpg'
    }
    // Add more books as needed
  ];

}
