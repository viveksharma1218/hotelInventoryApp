import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commentsInt } from './commentInt';

@Injectable({
  providedIn: 'root'
})
export class CommentServ {

  constructor(private http:HttpClient){}

  getComments(){
    return this.http.get<commentsInt[]>(
      'https://jsonplaceholder.typicode.com/comments',
    )
  }
}
