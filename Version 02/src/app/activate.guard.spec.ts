import { TestBed } from '@angular/core/testing';

import { ActivateGuard } from './activate.guard';

describe('AuthGuard', () => {
  let guard: ActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
