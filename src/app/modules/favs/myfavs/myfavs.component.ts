import { Component, OnInit } from '@angular/core';
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
  constructor(private auth:AuthService , private favservices:FavService){}


  ngOnInit(): void {
    this.getMyFavs()
  }

  getMyFavs(){
    this.userId = this.auth.getUserIDFromToken();
    console.log(this.userId); 
    this.favservices.getFavListById(this.userId).subscribe((res)=>{
      this.myfavs = res 
      console.log(res);
      
    })
  }

  clickFavVideo(videId:string){}
  removeFav(videoId:string){
    this.favservices.removeFav(videoId ,this.userId).subscribe((res)=>{
      this.getMyFavs()
    })
  }

}
