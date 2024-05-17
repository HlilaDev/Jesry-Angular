import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from 'src/app/core/services/section/section.service';

@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.scss']
})
export class AllSectionsComponent implements OnInit {

  sections:any;

  constructor(private sectionservice:SectionService , private router:Router){}


  ngOnInit(): void {
    this.getAllSections()
  }


  getAllSections(){
    this.sectionservice.getAllSections().subscribe((res)=>{
      this.sections = res
    })
  }

  onAddSection(){

    this.router.navigate(['/sections/add-section'])
  }
  onEdit(sectionId:any){
    this.router.navigate([`/sections/edit-section/${sectionId}`])
  }

  onDelete(sectionId:any){
    this.sectionservice.deleteSection(sectionId).subscribe((res)=>{
      this.getAllSections()
    })
  }

}
