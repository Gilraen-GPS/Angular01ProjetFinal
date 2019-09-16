import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAAcheterComponent } from './update-aacheter.component';

describe('UpdateAAcheterComponent', () => {
  let component: UpdateAAcheterComponent;
  let fixture: ComponentFixture<UpdateAAcheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAAcheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
