import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/core/models/section.model';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent {
  section: Section = {
    title: '',
    level: 'bac'
  };
  sectionId:any
constructor(private sectionervices:SectionService , private act:ActivatedRoute , private router:Router){}

  editSection(){
    this.sectionId = this.act.snapshot.paramMap.get('sid')
    this.sectionervices.editSection(this.sectionId , this.section).subscribe((res)=>{
      this.router.navigate(['/sections'])
    })
  }

}
