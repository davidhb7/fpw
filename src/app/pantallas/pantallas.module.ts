import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import { GestursComponent } from './gesturs/gesturs.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GestursComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    SharedModule
  ]
})
export class PantallasModule { }
