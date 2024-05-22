import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user:any
  activeMenu:string='Dashboard';
  role:any
  constructor(private auth:AuthService , private router:Router , private userservices:UserService){this.getRole() }
  ngOnInit(): void {
    this.getUserById()
  }

  getRole(){
    this.role = this.auth.getUserRoleFromToken()
  }

  getUserById(){
    const userId= this.auth.getUserIDFromToken()
    this.userservices.getUserById(userId).subscribe((res)=>{
      this.user = res
    })
  }


  MySection(){
    this.router.navigate([`/sections/section/${this.user.section}`])


  }

}
