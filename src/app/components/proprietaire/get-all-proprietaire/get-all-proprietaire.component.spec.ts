import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProprietaireComponent } from './get-all-proprietaire.component';

describe('GetAllProprietaireComponent', () => {
  let component: GetAllProprietaireComponent;
  let fixture: ComponentFixture<GetAllProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
