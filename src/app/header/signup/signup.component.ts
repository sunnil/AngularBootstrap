import { Component, OnInit, NgModule } from '@angular/core';
import {FormGroup, NgForm, ReactiveFormsModule, FormControl, FormsModule, Validators} from '@angular/forms';
import {Signup} from '../signup/signup'
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[UserService]
})
@NgModule({
  imports:[
    NgForm,
    FormGroup,
    ReactiveFormsModule,
    FormControl,
    FormsModule,
    Validators
  ],
  providers:[
    Signup,
    Router
  ]

})
export class SignupComponent implements OnInit {
  
  model: any = {};
  showMsg: boolean = false;
  constructor(private userService: UserService,
  private router:Router) { }

  ngOnInit() {
        
  }
  
  onSubmit(){
    
    //this.submitted = true;
    //if(this.model.valid){
      console.log(this.model);
       this.userService.signup(this.model).subscribe(data => {
        this.router.navigate(['/login']);
        console.log("signup successfully!", this.model);
        this.showMsg = true;
      })
    // }else{
    //   alert('somthing is wrong!');
    // }
     
  }
}
