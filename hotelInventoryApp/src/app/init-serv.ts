import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap,catchError, of, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitServ {
  config:any;
  constructor( private http:HttpClient){}
  
  init(){
    return this.http.get('assets/config.json')
    .pipe(tap((data)=>{
      this.config = data;
    }))
  };

  getConfig(): any {
    return this.config;
  }
}
