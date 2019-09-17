import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdCategorieComponent } from './get-by-id-categorie.component';

describe('GetByIdCategorieComponent', () => {
  let component: GetByIdCategorieComponent;
  let fixture: ComponentFixture<GetByIdCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
