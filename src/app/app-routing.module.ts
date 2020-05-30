import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { LoginNComponentComponent } from './login-ncomponent/login-ncomponent.component';


const routes: Routes = [
  {path:"korisnici",component:KorisniciComponent},
  
  {path:"",component:LoginNComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
