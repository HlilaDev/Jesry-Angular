import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{
  user:any
  userId:any

  constructor(private userservices:UserService, private router:Router , private act:ActivatedRoute){}
  ngOnInit(): void {
this.getUserById()  }


  getUserById(){
    this.userId = this.act.snapshot.paramMap.get('uid')
    this.userservices.getUserById(this.userId).subscribe((res)=>{
      this.user = res
    })


  }

  onEdit(){
    this.userservices.editUser(this.userId ,this.user).subscribe((res)=>{
      this.router.navigate(['/users'])
    })
  }
}
