import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditProfileComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
  ]
})
export class ProfileModule { }
