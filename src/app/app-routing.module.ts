import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {SignupComponent} from "./modules/authentication/components/signup/signup.component";
import {ResetPasswordComponent} from "./modules/authentication/components/reset-password/reset-password.component";
import {ForgotPasswordComponent} from "./modules/authentication/components/forgot-password/forgot-password.component";

const routes: Routes = [
  {path:'auth/login',component:LoginComponent},
  {path:'auth/signup', component:SignupComponent},
  {path:'auth/reset-password', component: ResetPasswordComponent},
  {path:'auth/forgot-password', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
