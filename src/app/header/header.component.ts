import { Component, OnInit, NgModule } from '@angular/core';
import { LoginComponent } from '../header/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Router } from "@angular/router";
import { User } from '../_models/user.model';
import { AuthenticationService } from "../services/authentication.service";
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@NgModule({
  imports: [
    LoginComponent,
    SignupComponent,
    User
  ],
  providers: [
    AuthenticationService
  ]
})

export class HeaderComponent implements OnInit {
  currentuser: User = null;
  currentusersubscription: Subscription;
  users: User[] = [];
  isUserLoggedIn: boolean;

  constructor(
    private router: Router,
    private authenticateservice: AuthenticationService,
  ) {
    this.currentusersubscription = this.authenticateservice.currentUser.subscribe(
      user => {
        this.currentuser = user;
      });
  }

  ngOnInit() {
    // let obs = Observable.interval(1000)
    // obs.subscribe(value => {
    //   this.currentuser
    // });
  }
  ngOnDestroy() {
     this.currentusersubscription.unsubscribe();
  }
  logout() {
    this.currentuser = null;
    localStorage.removeItem('currentuser');
    this.router.navigate(['/login']);
  }
}
