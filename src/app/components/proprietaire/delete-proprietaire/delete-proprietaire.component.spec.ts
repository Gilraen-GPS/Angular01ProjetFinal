import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProprietaireComponent } from './delete-proprietaire.component';

describe('DeleteProprietaireComponent', () => {
  let component: DeleteProprietaireComponent;
  let fixture: ComponentFixture<DeleteProprietaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProprietaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
