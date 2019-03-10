import { Component, OnInit, NgModule } from '@angular/core';
import {HomeService} from '../home/home.service';
import { UsersList } from '../home/users-list.model';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
@NgModule({
  imports:[
    
  ],
  providers:[
    HomeService,
    UsersList
  ]
})
export class UserComponent implements OnInit {

  myform: FormGroup ;
  pagetitle:string;

  constructor(
    private fb:FormBuilder,
    private userservie:HomeService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.myform = this.fb.group({
      id:[''],
      first_name:['',Validators.required],
      last_name:['']
    });
    
    const id= this.activeRoute.snapshot.paramMap.get('id');
    if(id){
      this.pagetitle ='Edit user';
      this.userservie.getUser(id).subscribe( (res:any) =>{
        //console.log('teeee', res);
        this.myform.patchValue({
          id: res.data.id,
          first_name: res.data.first_name,
          last_name:res.data.last_name,
        })
      })
    }else{
      this.pagetitle = 'Create User';
      
    }
  }
  onSubmit(){
     this.userservie.adduser(this.myform.patchValue).subscribe((res:any) =>{
      console.log(this.myform.value);
      this.router.navigate(['/home'])
    })
  }
}
