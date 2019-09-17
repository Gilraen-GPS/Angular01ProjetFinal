import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAAcheterComponent } from './get-all-aacheter.component';

describe('GetAllAAcheterComponent', () => {
  let component: GetAllAAcheterComponent;
  let fixture: ComponentFixture<GetAllAAcheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllAAcheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllAAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
