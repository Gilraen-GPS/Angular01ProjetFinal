import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddALouerComponent } from './add-alouer.component';

describe('AddALouerComponent', () => {
  let component: AddALouerComponent;
  let fixture: ComponentFixture<AddALouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddALouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddALouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
