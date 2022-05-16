import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuadmComponent } from './menuadm/menuadm.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MenuadmComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
