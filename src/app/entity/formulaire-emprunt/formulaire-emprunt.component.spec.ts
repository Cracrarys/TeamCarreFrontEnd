import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEmpruntComponent } from './formulaire-emprunt.component';

describe('FormulaireEmpruntComponent', () => {
  let component: FormulaireEmpruntComponent;
  let fixture: ComponentFixture<FormulaireEmpruntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireEmpruntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
