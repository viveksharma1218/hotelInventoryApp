import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newroom } from './newroom';

describe('Newroom', () => {
  let component: Newroom;
  let fixture: ComponentFixture<Newroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newroom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newroom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
