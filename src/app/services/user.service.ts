import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }
  login(data) {
    //console.log(data);
    return this.http.post(`${environment.userApi}login`,data);
  }
  signup(data) {
    console.log(data);
    return this.http.post(`${environment.userApi}register`,data);
  }
}
