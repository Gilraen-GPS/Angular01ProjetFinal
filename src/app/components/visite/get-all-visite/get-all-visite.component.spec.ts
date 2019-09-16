import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVisiteComponent } from './get-all-visite.component';

describe('GetAllVisiteComponent', () => {
  let component: GetAllVisiteComponent;
  let fixture: ComponentFixture<GetAllVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
