import { TestBed } from '@angular/core/testing';

import { CommentServ } from './comment-serv';

describe('CommentServ', () => {
  let service: CommentServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
