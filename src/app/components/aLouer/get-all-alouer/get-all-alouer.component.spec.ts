import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllALouerComponent } from './get-all-alouer.component';

describe('GetAllALouerComponent', () => {
  let component: GetAllALouerComponent;
  let fixture: ComponentFixture<GetAllALouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllALouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllALouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
