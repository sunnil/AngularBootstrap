import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { AuthguardGuard } from "./_guard/authguard.guard";
import { UnAuthGuard  } from "./_guard/un-auth.guard";
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[UnAuthGuard]
  },
  
  {
    path:'signup',
    component:SignupComponent,
    canActivate:[UnAuthGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path:'user/:id',
    component:UserComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
