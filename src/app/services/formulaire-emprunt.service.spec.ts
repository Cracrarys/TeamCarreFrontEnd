import { TestBed } from '@angular/core/testing';

import { FormulaireEmpruntService } from './formulaire-emprunt.service';

describe('FormulaireEmpruntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormulaireEmpruntService = TestBed.get(FormulaireEmpruntService);
    expect(service).toBeTruthy();
  });
});
