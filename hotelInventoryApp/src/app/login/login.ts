import { Component, Directive } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Hover } from '../hover';
import { JsonPipe } from '@angular/common';
import { Emailvalidator } from '../emailvalidator';
import { Router } from '@angular/router';
import { LoginService } from './login-service';

@Component({
  selector: 'hinv-login',
  standalone:true,
  imports: [FormsModule,Hover,JsonPipe,Emailvalidator],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  userEmail:string = '';
  userPassword!:number ;

  constructor(private route : Router, private logInService:LoginService){}
  logIn(){
    if(this.logInService.logIn(this.userEmail,this.userPassword)){
      window.alert("logIn successfully");
      this.route.navigate(['/rooms']);
    
    }
  }
}
