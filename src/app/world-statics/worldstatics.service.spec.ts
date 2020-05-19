import { TestBed } from '@angular/core/testing';

import { WorldstaticsService } from './worldstatics.service';

describe('WorldstaticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldstaticsService = TestBed.get(WorldstaticsService);
    expect(service).toBeTruthy();
  });
});
