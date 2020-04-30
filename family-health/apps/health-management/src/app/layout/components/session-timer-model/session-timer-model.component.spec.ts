import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTimerModelComponent } from './session-timer-model.component';

describe('SessionTimerModelComponent', () => {
  let component: SessionTimerModelComponent;
  let fixture: ComponentFixture<SessionTimerModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTimerModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTimerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
