import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{
  users:any;
  constructor(private userservices:UserService , private router:Router , private auth:AuthService){}
  ngOnInit(): void {
this.getAllUsers()  }


  getAllUsers(){
    this.userservices.getAllUsers().subscribe((res)=>{
      this.users = res
    })
  }

  EditUser(userId:string){
    this.router.navigate([`/users/edit-user/${userId}`])
    
  }

  DeleteUser(userId:string){
    this.userservices.deleteUser(userId).subscribe((res)=>{
this.getAllUsers()   
 })
  }

}
