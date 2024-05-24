import { Component, Input, OnInit,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { VideoService } from 'src/app/core/services/video/video.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @Input() user:any ;
  nbNotifications:number=0;
  notifications:any
  userId:any
  showNotifications: boolean = false; // State variable to toggle notification visibility


  constructor(private userservice:UserService , private router:Router ,private videoservices:VideoService , private auth:AuthService ){}
  ngOnInit(): void {
    this.getNotifications()
    
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

  getNotifications(){
    this.userId = this.auth.getUserIDFromToken()
    this.videoservices.getNotifications(this.userId).subscribe((res:any)=>{
 this.notifications = res
 this.nbNotifications = this.notifications.length
 console.log(this.notifications);
 

 
 
    })
  }

  toggleNotifications(event: Event) {
    event.stopPropagation();
    this.showNotifications = !this.showNotifications;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.navbar-item');
    if (!clickedInside) {
      this.showNotifications = false;
    }
  }
}
