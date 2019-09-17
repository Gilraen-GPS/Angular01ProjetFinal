import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdAAcheterComponent } from './get-by-id-aacheter.component';

describe('GetByIdAAcheterComponent', () => {
  let component: GetByIdAAcheterComponent;
  let fixture: ComponentFixture<GetByIdAAcheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdAAcheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdAAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
