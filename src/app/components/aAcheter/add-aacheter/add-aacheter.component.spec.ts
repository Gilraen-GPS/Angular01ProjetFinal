import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAAcheterComponent } from './add-aacheter.component';

describe('AddAAcheterComponent', () => {
  let component: AddAAcheterComponent;
  let fixture: ComponentFixture<AddAAcheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAAcheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
