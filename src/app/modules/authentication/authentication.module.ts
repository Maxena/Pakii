import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppRoutingModule } from '../../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [],
})
export class AuthenticationModule {}
