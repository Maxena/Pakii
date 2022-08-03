import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';
import { FooterSmallComponent } from './components/footer-small/footer-small.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    SideBarComponent,
    AuthComponentComponent,
    FooterSmallComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    NavBarComponent,
    FooterSmallComponent,
    HeaderComponent,
    SideBarComponent,
  ],
})
export class SharedModule {}
