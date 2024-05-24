import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SectionService } from 'src/app/core/services/section/section.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user:any
  isCheckboxChecked: boolean = false;
  selectedLevel:any;
  sections:any

  constructor(private userservices:UserService ,private auth:AuthService, private router:Router , private sectionservices:SectionService ){}
  ngOnInit(): void {
this.getUserById()
this.getAllsections()
  }

  getUserById(){
    const userId = this.auth.getUserIDFromToken()
    this.userservices.getUserById(userId).subscribe((res)=>{
   this.user = res
   console.log(this.user);
   
    })
  }

  getAllsections(){
    this.sectionservices.getAllSections().subscribe((res)=>{
      this.sections = res
    })
  }

  onCheckboxChange(event: any) {
    this.isCheckboxChecked = event.target.checked;
  }

  editProfile(userId:any){
    this.userservices.editUser(userId, this.user).subscribe((res)=>{
      this.router.navigate([`/profile/${userId}`])
    })
  }

  deleteAccount(){
    this.userservices.deleteUser(this.user._id).subscribe((res)=>{
      this.router.navigate(['/auth/login'])
    })
  }

  onLevelChange(event:any){
    this.selectedLevel = event.target.value

  }

  cancelEdit(){
    this.router.navigate([`/profile/${this.user._id}`])
  }

}
