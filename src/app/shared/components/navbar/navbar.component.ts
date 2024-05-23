import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Input() user:any ;

  constructor(private userservice:UserService , private router:Router , private auth:AuthService ){}
  ngOnInit(): void {
    
  }


  onLogout(){
  this.auth.removeTokenFromCookie()
  this.router.navigate(['/auth/login'])
  }

  toProfile(){
    this.router.navigate([`/profile/${this.user._id}`])
  }

  goToFav(userId:any){
    this.router.navigate([`/myfavs`])
  }
  goToMyNotes(){
    this.router.navigate([`/mynotes`])

  }

  addVideo(){
    this.router.navigate([`/vids/add-video/${this.user._id}`])

  }

  editProfile(){
    this.router.navigate([`/profile/edit-profile/${this.user._id}`])
  }

}
