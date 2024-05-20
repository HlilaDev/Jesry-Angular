import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyfavsComponent } from './myfavs/myfavs.component';

const routes: Routes = [
  {path:'', component:MyfavsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavsRoutingModule { }
