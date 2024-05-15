import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  role:any

  constructor(private auth:AuthService){
    this.getRole()
  }

  getRole(){
   this.role = this.auth.getUserRoleFromToken()
  }

}
