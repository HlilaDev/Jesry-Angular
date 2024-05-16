import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent, 
    children: [
      { path: 'dashboard', component:DashboardComponent },
      {path:'docs' , loadChildren:()=>import('../docs/docs.module').then(m=>m.DocsModule)},
      {path:'vids' , loadChildren:()=>import('../video/video.module').then(m=>m.VideoModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }