import { async, TestBed } from '@angular/core/testing';
import { AnimationsModule } from './animations.module';

describe('AnimationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnimationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnimationsModule).toBeDefined();
  });
});
