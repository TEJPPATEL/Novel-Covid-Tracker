import { TestBed } from '@angular/core/testing';

import { CountrySummaryService } from './country-summary.service';

describe('CountrySummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrySummaryService = TestBed.get(CountrySummaryService);
    expect(service).toBeTruthy();
  });
});
