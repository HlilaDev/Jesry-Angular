import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user:any;

  constructor(private userservice:UserService , private router:Router , private auth:AuthService ){}
  ngOnInit(): void {
    this.getUserById()
  }


  getUserById(){
    const userId = this.auth.getUserIDFromToken()
    
    
    this.userservice.getUserById(userId).subscribe((res)=>{
      this.user = res
     
      
    })
  }


  onLogout(){
  this.auth.removeTokenFromCookie()
  this.router.navigate(['/auth/login'])
  }

  toProfile(userId:any){}

  goToFav(userId:any){
    this.router.navigate([`/myfavs`])
  }
  goToMyNotes(){
    this.router.navigate([`/mynotes`])

  }

  addVideo(userId:any){
    this.router.navigate([`/vids/add-video/${userId}`])

  }

}
