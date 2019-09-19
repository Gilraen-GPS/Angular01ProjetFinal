import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPrimaireComponent } from './accueil-primaire.component';

describe('AccueilPrimaireComponent', () => {
  let component: AccueilPrimaireComponent;
  let fixture: ComponentFixture<AccueilPrimaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilPrimaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilPrimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
