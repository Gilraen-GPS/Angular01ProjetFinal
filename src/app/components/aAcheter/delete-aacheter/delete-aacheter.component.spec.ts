import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAAcheterComponent } from './delete-aacheter.component';

describe('DeleteAAcheterComponent', () => {
  let component: DeleteAAcheterComponent;
  let fixture: ComponentFixture<DeleteAAcheterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAAcheterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAAcheterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
