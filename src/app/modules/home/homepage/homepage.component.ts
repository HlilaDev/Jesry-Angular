import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user:any
  title: string | undefined;

  constructor(private auth:AuthService , private userservices:UserService){}

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById(){
    const userId = this.auth.getUserIDFromToken()
    this.userservices.getUserById(userId).subscribe((res)=>{
      this.user = res       
    })
  }

}
