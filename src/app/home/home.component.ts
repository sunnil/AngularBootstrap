import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Home } from '../home.model';
import { HomeService } from './home.service';
import { UserService } from '../services/user.service';
import { UsersList } from './users-list.model';
import { UserComponent } from '../user/user.component';


@NgModule({
  imports:[
    FormGroup,
    FormControl,
    ReactiveFormsModule,
    Validators,
    UsersList,
    UserComponent

  ],
  providers:[
    Home,
    HomeService
    
  ]

})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[UserService]
})

export class HomeComponent implements OnInit {
  //@ViewChild('users') user:any;
  authors:Home[]
  myform:FormGroup;
 
  users: UsersList[] = [];
  
  
  constructor(
    private userservice:UserService,
    private homeservice:HomeService,
   
    ) {
    
    this.authors = [
      new Home('sunil','choudhary','sk@gmail.com')
      
    ]
   }

  ngOnInit() {
        
    this.loaduser();
         
    // this.myform = new FormGroup({
    //   firstname: new FormControl('',Validators.required),
    //   email: new FormControl('',
    //   [
    //     Validators.required,
    //     Validators.pattern('[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]')
    //   ]),
    //   mobile: new FormControl()
    // });

   
  }
  // onSubmit(){
  //   if(this.myform.valid){ console.log("submit successfully!", this.myform.value );
  //     this.myform.reset();
  //   }
  // }
  private loaduser(){
     this.homeservice.getdata().pipe(first()).subscribe((res:any)  => {
     this.users = res.data;
      console.log(this.users);
      })
    }

}

