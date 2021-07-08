import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './guards/auth.guard';

const routes : Routes = [

  {
    path : '' , component : PagesComponent,
    canActivate :[ AuthGuard],
    children: [

      {path : 'home' , component : HomeComponent},
      {path : 'peliculas/:id' , component : PeliculasComponent},
      {path : '' , redirectTo : '/home' , pathMatch : 'full'}
      
    ]
  },

  {path : 'login' , component : LoginComponent},
  {path : '**' , component : NopagefoundComponent}
  

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
