import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { SignupComponent } from './header/signup/signup.component';
import { AuthenticationService } from './services/authentication.service';
import { UserComponent } from './user/user.component';
import { MustMatchDirective } from './_helper/must-match.directive';
import { AlertComponent } from './_directives/alert.componet';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    MustMatchDirective,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    HttpClientModule,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
