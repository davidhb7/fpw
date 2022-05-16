import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuadmComponent } from './menuadm/menuadm.component';

const routes: Routes = [
  {path: '', component: MenuadmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
