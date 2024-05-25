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
  showNotifications: boolean = false; 
  showQuickAccess:boolean = false ;


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

  editProfile(){
    this.router.navigate([`/profile/edit-profile/${this.user._id}`])
  }

  getNotifications(){
    this.userId = this.auth.getUserIDFromToken()
    this.videoservices.getNotifications(this.userId).subscribe((res:any)=>{
 this.notifications = res
 this.nbNotifications = this.notifications.length
 
    })
  }

  toggleNotifications(event: Event) {
    event.stopPropagation();
    this.showNotifications = !this.showNotifications;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideNotification = target.closest('.navbar-item');
    const clickedInsideQuickAccess = target.closest('.quick-access-banner');

    if (!clickedInsideNotification) {
      this.showNotifications = false;
    }

    if (!clickedInsideQuickAccess) {
      this.showQuickAccess = false;
    }
  }

  toggleQuickAccess(event: Event){
    event.stopPropagation();
    this.showQuickAccess = !this.showQuickAccess

  }

 
}
