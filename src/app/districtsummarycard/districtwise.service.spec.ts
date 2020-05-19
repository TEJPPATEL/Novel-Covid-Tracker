import { TestBed } from '@angular/core/testing';

import { DistrictwiseService } from './districtwise.service';

describe('DistrictwiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistrictwiseService = TestBed.get(DistrictwiseService);
    expect(service).toBeTruthy();
  });
});
