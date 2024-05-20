import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavsRoutingModule } from './favs-routing.module';
import { MyfavsComponent } from './myfavs/myfavs.component';


@NgModule({
  declarations: [
    MyfavsComponent
  ],
  imports: [
    CommonModule,
    FavsRoutingModule
  ]
})
export class FavsModule { }
