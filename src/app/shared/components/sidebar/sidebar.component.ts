import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  user:any
  activeMenu:string='Dashboard';
  role:any
  constructor(private auth:AuthService){this.getRole() }

  getRole(){
    this.role = this.auth.getUserRoleFromToken()
  }


  

}
