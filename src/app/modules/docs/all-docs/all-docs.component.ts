import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-all-docs',
  templateUrl: './all-docs.component.html',
  styleUrls: ['./all-docs.component.scss']
})
export class AllDocsComponent {
  role:any

  constructor(private auth:AuthService){
    this.getRole()
  }



  getRole(){
    this.role = this.auth.getUserRoleFromToken()
   }


}
