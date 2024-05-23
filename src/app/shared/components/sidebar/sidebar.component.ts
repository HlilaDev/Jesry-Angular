import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() user: any;
  activeMenu:string='Dashboard';
  role:any
  constructor( private router:Router){ }
 

 

 


  MySection(){
    this.router.navigate([`/sections/section/${this.user?.section}`])


  }

}
