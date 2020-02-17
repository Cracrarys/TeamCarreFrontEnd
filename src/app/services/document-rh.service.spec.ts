import { TestBed } from '@angular/core/testing';

import { DocumentRHService } from './document-rh.service';

describe('DocumentRHService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentRHService = TestBed.get(DocumentRHService);
    expect(service).toBeTruthy();
  });
});
