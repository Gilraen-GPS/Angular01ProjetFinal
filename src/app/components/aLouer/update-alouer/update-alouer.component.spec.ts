import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateALouerComponent } from './update-alouer.component';

describe('UpdateALouerComponent', () => {
  let component: UpdateALouerComponent;
  let fixture: ComponentFixture<UpdateALouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateALouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateALouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
