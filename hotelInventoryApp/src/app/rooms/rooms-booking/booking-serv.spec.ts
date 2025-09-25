import { TestBed } from '@angular/core/testing';

import { BookingServ } from './booking-serv';

describe('BookingServ', () => {
  let service: BookingServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
