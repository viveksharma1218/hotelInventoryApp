import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServ {

  constructor(private http:HttpClient){}
  
  bookRoom(data:any){
    return  this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
