import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user:any

  constructor(private userservices:UserService ,private auth:AuthService, private router:Router ){}
  ngOnInit(): void {
this.getUserById()
  }

  getUserById(){
    const userId = this.auth.getUserIDFromToken()
    this.userservices.getUserById(userId).subscribe((res)=>{
   this.user = res
   console.log(this.user);
   
    })
  }

  editProfile(userId:any){
    this.userservices.editUser(userId, this.user).subscribe((res)=>{
      this.router.navigate(['/profile'])
    })
  }



}
