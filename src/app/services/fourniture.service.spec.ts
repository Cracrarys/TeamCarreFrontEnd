import { TestBed } from '@angular/core/testing';

import { FournitureService } from './fourniture.service';

describe('FournitureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FournitureService = TestBed.get(FournitureService);
    expect(service).toBeTruthy();
  });
});
