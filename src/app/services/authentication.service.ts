import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { BehaviorSubject,Observable } from "rxjs";

import { User } from "../_models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentuser')));
      this.currentUser= this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  login(email:string,password:string){
    return this.http.post(`${environment.userApi}login`,
    {email:email,password:password}).pipe(map((user:any) => {
      //console.log(user)
      if(user && user.success && user.success.token){
        //console.log(user.success.email);
        localStorage.setItem('currentuser',JSON.stringify(user.success));
        this.currentUserSubject.next(user.success);
      }
      return user;
    }));
  }
 
}
