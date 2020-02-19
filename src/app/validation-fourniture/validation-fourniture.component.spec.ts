import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFournitureComponent } from './validation-fourniture.component';

describe('ValidationFournitureComponent', () => {
  let component: ValidationFournitureComponent;
  let fixture: ComponentFixture<ValidationFournitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationFournitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationFournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
