import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavService } from 'src/app/core/services/favs/fav.service';

@Component({
  selector: 'app-myfavs',
  templateUrl: './myfavs.component.html',
  styleUrls: ['./myfavs.component.scss']
})
export class MyfavsComponent implements OnInit {
  myfavs:any
  userId:any
  constructor(private auth:AuthService , private favservices:FavService , private router:Router){}


  ngOnInit(): void {
    this.getMyFavs()
  }

  getMyFavs(){
    this.userId = this.auth.getUserIDFromToken();
    this.favservices.getFavListById(this.userId).subscribe((res)=>{
      this.myfavs = res 
     
      
    })
  }

  clickFavVideo(videoId:string){
    this.router.navigate([`/vids/play/${videoId}`])
  }
  removeFav(videoId:string){
    this.favservices.removeFav(this.userId ,videoId ).subscribe((res)=>{
      this.getMyFavs()
    })
  }

}
