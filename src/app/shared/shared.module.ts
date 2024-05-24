import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    NotificationsComponent,
    SearchBoxComponent,
  
    
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationsComponent,
    // other components
  ]
})
export class SharedModule { }
