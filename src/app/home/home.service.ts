import { Injectable, NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { UsersList} from '../home/users-list.model';
import { RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root',
  
 })
 @NgModule({
   imports:[
     UsersList
   ]

 })
export class HomeService {

  constructor(public http:HttpClient) { }
  

  getdata(){
      return this.http.get(`${environment.apiPath}users`);
  }
  getuser(){
    return this.http.get(`${environment.userApi}register`);
}
  getUser(id) {
    return this.http.get(`${environment.EditapiPath}` + id)
  };
    adduser(data){
      return this.http.put(`${environment.apiPath}users`,data);
    }
 

}
