import { Component } from '@angular/core';
import { CommentServ } from './comment-serv';
import { commentsInt } from './commentInt';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { pluck } from 'rxjs';

@Component({
  standalone:true,
  selector: 'hinv-comment',
  imports:[],
  templateUrl: './comment.html',
  styleUrl: './comment.scss'
})
export class Comment implements OnInit{
  //comments$;
  comments:any;

  constructor(private CommentService:CommentServ,private activatedRoute:ActivatedRoute){
    //this.comments$ = CommentService.getComments();
    this.comments = this.activatedRoute.snapshot.data['comments'];
  }
  
  ngOnInit(): void {
    //  this.comments = this.activatedRoute.snapshot.data['comments']; 
    //  console.log('Resolved comments:', this.comments);
  }
  

}
