import { TestBed, inject } from '@angular/core/testing';

import { TrHttpService } from './tr-http.service';

describe('TrHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrHttpService]
    });
  });

  it('should be created', inject([TrHttpService], (service: TrHttpService) => {
    expect(service).toBeTruthy();
  }));
});
