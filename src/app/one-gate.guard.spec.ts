import { TestBed, async, inject } from '@angular/core/testing';

import { OneGateGuard } from './one-gate.guard';

describe('OneGateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneGateGuard]
    });
  });

  it('should ...', inject([OneGateGuard], (guard: OneGateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
