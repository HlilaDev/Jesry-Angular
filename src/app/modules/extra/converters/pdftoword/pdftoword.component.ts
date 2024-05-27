import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pdftoword',
  templateUrl: './pdftoword.component.html',
  styleUrls: ['./pdftoword.component.scss']
})
export class PdftowordComponent {
  selectedFile: File | null = null;

  constructor(private http:HttpClient){}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(event: Event) {
    event.preventDefault();  // Prevent the default form submission behavior

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.http.post('/api/convert', formData, { responseType: 'blob' })
        .subscribe(response => {
          const url = window.URL.createObjectURL(response);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${this.selectedFile?.name.split('.').slice(0, -1).join('.')}.docx`;
          a.click();
          window.URL.revokeObjectURL(url);
        });
    }
  }

}
