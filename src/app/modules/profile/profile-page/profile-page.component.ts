import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { SubscribeService } from 'src/app/core/services/subscribes/subscribe.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user:any
  userId= this.auth.getUserIDFromToken()
  subscribes:any


  constructor(private auth:AuthService , private userservices:UserService , private subscribeservices:SubscribeService , private router:Router ){}


  ngOnInit(): void {
    this.getUserById()
    this.getSubscribresById()
  }

  getUserById(){
    this.userservices.getUserById(this.userId).subscribe((res)=>{
      this.user = res
      
    })
  }

  getSubscribresById(){
    this.subscribeservices.getSubscribesById(this.userId).subscribe((res)=>{
      this.subscribes = res
    })
  }

  editProfile(userId:any){
    this.router.navigate([`/profile/edit-profile/${this.userId}`])

  }

}
