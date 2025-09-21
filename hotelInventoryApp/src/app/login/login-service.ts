import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean = false;
  isAdmin:boolean = false;
  constructor(){}

  logIn(email:string,password:number){
    if(email =='admin@gmail.com' && password == 1234){
      this.isLoggedIn = true;
      this.isAdmin = true;
      return true;
    }
   else if (email =='user@gmail.com' && password == 1234){
      this.isLoggedIn = true;
      this.isAdmin = false;
      return true;
   }
   else{
    this.isLoggedIn = false;
    this.isAdmin = false;
    return false;
   }
    
  }
}
