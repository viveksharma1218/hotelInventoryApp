import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Hover } from '../hover';

@Component({
  selector: 'hinv-login',
  imports: [FormsModule,Hover],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  userEmail:string = '';
  userPassword!:number ;

  constructor(){}
  logIn(){
    if(this.userEmail =='admin@gmail.com' && this.userPassword == 1234){
      window.alert("logIn successfully")
    }
  }
}
