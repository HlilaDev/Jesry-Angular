import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from 'src/app/core/models/section.model';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent {
  section:Section={
    title:'',
    level:'licence'
  }

  constructor(private sectionservices:SectionService , private router:Router){}


  addSection(){
    this.sectionservices.addSection(this.section).subscribe((res)=>{
      this.router.navigate(['/sections'])
    })
  }

  cancelAddSection(){
    this.router.navigate(['/sections'])
  }

}
