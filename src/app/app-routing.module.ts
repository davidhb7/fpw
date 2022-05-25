import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuadmComponent } from './admin/menuadm/menuadm.component';
import { GestursComponent } from './pantallas/gesturs/gesturs.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/auth', pathMatch:'full'
  },
  {
    path:'menu',
    loadChildren:() => import ('./admin/admin.module').then(m =>m.AdminModule),
  },
  {
    path: 'pantallas',
    loadChildren:()=> import ('./pantallas/pantallas.module').then(m=>m.PantallasModule),
  },
  {
    path: 'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule),
  },



  {path: 'gesturs', component: GestursComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
