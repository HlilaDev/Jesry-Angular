import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user={
    firstName:'',
    lastName:'',
    userName:'',
    password:'', 
  }
  constructor(private router:Router , private authservice:AuthService){}


  onRegister(){
    this.authservice.register(this.user).subscribe((res)=>{
      this.router.navigate(['/auth/login'])

    })

  }

  goLogin(){
    this.router.navigate(['/auth/login'])
  }

}
