import { Component, Directive } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Hover } from '../hover';
import { JsonPipe } from '@angular/common';
import { Emailvalidator } from '../emailvalidator';
import { Router } from '@angular/router';

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

  constructor(private route : Router){}
  logIn(){
    if(this.userEmail =='admin@gmail.com' && this.userPassword == 1234){
      window.alert("logIn successfully");
      this.route.navigate(['/rooms']);
    
    }
  }
}
