import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { adminGuard } from 'src/app/core/gurads/admin/admin.guard';
import { FavoritesComponent } from '../favorites/favorites.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent, 
    children: [
      { path: 'dashboard', component:DashboardComponent },
      {path:'docs' , loadChildren:()=>import('../docs/docs.module').then(m=>m.DocsModule)},
      {path:'vids' , loadChildren:()=>import('../video/video.module').then(m=>m.VideoModule)},
      {path:'sections' , loadChildren:()=>import('../section/section.module').then(m=>m.SectionModule)},
      {path:'courses' , loadChildren:()=>import('../courses/courses.module').then(m=>m.CoursesModule)},
      {path:'users' , loadChildren:()=>import('../users/users.module').then(m=>m.UsersModule) , canActivate:[adminGuard]},
      {path:'favs' , component:FavoritesComponent},
      {path:'mynotes' , loadChildren:()=> import('../notes/notes.module').then(m=>m.NotesModule)}



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }