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
    userName:'',
    password:''
  }
 
  constructor(private router:Router , private auth:AuthService , private cookieService: CookieService){}

  onLogin(){
    //add trim to iputs
    this.user.userName = this.user.userName.trim();
    this.user.password = this.user.password.trim();
    this.auth.login(this.user).subscribe((res)=>{
      const token = res;
      setAuthToken(this.cookieService, token);

      this.router.navigate(['/dashboard'])
    })
  }
  toRegister(){
    this.router.navigate(['/auth/register'])
  }
}
