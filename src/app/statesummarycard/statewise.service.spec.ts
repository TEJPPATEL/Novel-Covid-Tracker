import { TestBed } from '@angular/core/testing';

import { StatewiseService } from './statewise.service';

describe('StatewiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatewiseService = TestBed.get(StatewiseService);
    expect(service).toBeTruthy();
  });
});
