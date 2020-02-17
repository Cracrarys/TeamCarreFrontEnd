import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRHComponent } from './document-rh.component';

describe('DocumentRHComponent', () => {
  let component: DocumentRHComponent;
  let fixture: ComponentFixture<DocumentRHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
