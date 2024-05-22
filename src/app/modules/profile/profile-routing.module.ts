import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path:'', component:ProfilePageComponent },
  {path:'edit-profile', component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
