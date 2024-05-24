import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  user:any
  userId:any

  constructor(private auth:AuthService , private router:Router , private userservices:UserService){
    
  }
  ngOnInit(): void {
    this.getUserById()
  }


  getUserById(){
   this.userId = this.auth.getUserIDFromToken()
   this.userservices.getUserById(this.userId).subscribe((res)=>{
    this.user = res
   })
  }
 
  goToProfile(){
    this.router.navigate([`/profile/${this.userId}`])

  }

}
