import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm, FormControl, ReactiveFormsModule, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Login } from './login';
import 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DatasharingService } from './../../services/datasharing.service';
import { AlertService } from "../../services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@NgModule({
  imports:[
    NgForm,
    FormControl,
    ReactiveFormsModule,
    FormBuilder,
    Validators
  ],
  providers:[
    Login,
    UserService,
    Router,
    AuthenticationService
  ]
})
export class LoginComponent implements OnInit {
 
  loginform:FormGroup;
  email:FormControl;
  password:FormControl;
  submitted = false;
  isUserLoggedIn:boolean;
  loading = false;

  constructor( private loginservice:UserService, private formBuilder:FormBuilder,
    private router:Router,private authenticate:AuthenticationService,
    private datasharingService: DatasharingService,
    private alertservice:AlertService) { 
     
    }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email : new FormControl('' ,[Validators.required ,
      Validators.pattern("[^ @]*@[^ @]*")
    ]),
      password : new FormControl('',Validators.required),
    });
  }
  get loginD(){ return this.loginform.controls;} 

  

  onSubmit(){
    this.submitted = true;
  //   if(this.loginform.invalid) {
  //     return;
  // }
    
    //this.loading = true;
    this.authenticate.login(this.loginD.email.value,this.loginD.password.value).subscribe( data =>{
     
      this.router.navigate(['/home']);
      
    }
    //  error =>{
    //   this.alertservice.error(error);
    //   this.loading = false;
    // }
    );
   
  }

}
