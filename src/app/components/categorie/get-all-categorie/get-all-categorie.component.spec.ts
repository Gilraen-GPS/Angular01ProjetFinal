import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCategorieComponent } from './get-all-categorie.component';

describe('GetAllCategorieComponent', () => {
  let component: GetAllCategorieComponent;
  let fixture: ComponentFixture<GetAllCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
