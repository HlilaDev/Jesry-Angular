import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FavService } from 'src/app/core/services/favs/fav.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
  favs:any

  constructor(private auth:AuthService , private fav:FavService){}

  ngOnInit(): void {
  }


  getFavsByUserId(){
   const userId = this.auth.getUserIDFromToken()
   this.fav.getFavListById(userId).subscribe((res)=>{
    this.favs =res
   })
  }
 

}
