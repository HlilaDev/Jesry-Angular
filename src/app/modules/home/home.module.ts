import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { DocsModule } from '../docs/docs.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DocsModule,
    SharedModule
  ]
})
export class HomeModule { }