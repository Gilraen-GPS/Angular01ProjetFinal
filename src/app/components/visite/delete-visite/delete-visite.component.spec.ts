import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVisiteComponent } from './delete-visite.component';

describe('DeleteVisiteComponent', () => {
  let component: DeleteVisiteComponent;
  let fixture: ComponentFixture<DeleteVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
