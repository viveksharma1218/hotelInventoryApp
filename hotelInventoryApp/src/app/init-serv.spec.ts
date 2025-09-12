import { TestBed } from '@angular/core/testing';

import { InitServ } from './init-serv';

describe('InitServ', () => {
  let service: InitServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
