import { TestBed } from '@angular/core/testing';

import { CountrystaticsService } from './countrystatics.service';

describe('CountrystaticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrystaticsService = TestBed.get(CountrystaticsService);
    expect(service).toBeTruthy();
  });
});
