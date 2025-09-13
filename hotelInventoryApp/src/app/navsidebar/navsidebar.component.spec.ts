import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsidebarComponent } from './navsidebar.component';

describe('NavsidebarComponent', () => {
  let component: NavsidebarComponent;
  let fixture: ComponentFixture<NavsidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavsidebarComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
