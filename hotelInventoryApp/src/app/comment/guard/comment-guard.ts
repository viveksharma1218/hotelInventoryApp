import { ResolveFn } from '@angular/router';
import { commentsInt } from '../commentInt';
import { CommentServ } from '../comment-serv';
import { inject } from '@angular/core';


export const commentGuard: ResolveFn<commentsInt[]> = (route, state) => {
  const commentService = inject(CommentServ);

  return commentService.getComments()

};
