import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.scss']
})
export class AddDocComponent {

  role:any

  constructor(private auth:AuthService){
    this.getRole()
  }



  getRole(){
    this.role = this.auth.getUserRoleFromToken()
   }

}
