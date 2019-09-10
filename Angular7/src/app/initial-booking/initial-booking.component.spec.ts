import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialBookingComponent } from './initial-booking.component';

describe('InitialBookingComponent', () => {
  let component: InitialBookingComponent;
  let fixture: ComponentFixture<InitialBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
