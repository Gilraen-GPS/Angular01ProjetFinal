import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdProprietaireComponent } from './get-by-id-proprietaire.component';

describe('GetByIdProprietaireComponent', () => {
  let component: GetByIdProprietaireComponent;
  let fixture: ComponentFixture<GetByIdProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
