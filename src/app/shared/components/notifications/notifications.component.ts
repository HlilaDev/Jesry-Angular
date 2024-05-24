import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  @Input() notifications:any ;

  constructor(private router:Router){}


  

  goToNotif(videoId:any){
    this.router.navigate([`/vids/play/${videoId}`])

  }

}
