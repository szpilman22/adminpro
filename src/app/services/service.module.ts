import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// SERVICIOS
import { SettingsService, SidebarService, SharedService } from './service.index';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],

  providers: [
    SettingsService,
    SidebarService,
    SharedService
  ]
})
export class ServiceModule { }
