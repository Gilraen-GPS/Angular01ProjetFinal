import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdALouerComponent } from './get-by-id-alouer.component';

describe('GetByIdALouerComponent', () => {
  let component: GetByIdALouerComponent;
  let fixture: ComponentFixture<GetByIdALouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdALouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdALouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
