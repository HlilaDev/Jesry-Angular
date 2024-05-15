import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { setAuthToken } from 'src/app/utils/cookie.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user={
    userName:' ',
    password:''
  }
 
  constructor(private router:Router , private auth:AuthService , private cookieService: CookieService){}

  onLogin(){
    this.auth.login(this.user).subscribe((res)=>{
      const token = res;
      setAuthToken(this.cookieService, token);

      this.router.navigate(['/dashboard'])
    })
  }
  toRegister(){}
}
