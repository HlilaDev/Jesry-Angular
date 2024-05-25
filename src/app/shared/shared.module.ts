import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AdminQuickAccessComponent } from './components/admin-quick-access/admin-quick-access.component';




@NgModule({
  declarations: [
    NotificationsComponent,
    AdminQuickAccessComponent,
    SearchBoxComponent,
    AdminQuickAccessComponent,
  
    
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationsComponent,
    AdminQuickAccessComponent,
  ]
})
export class SharedModule { }
