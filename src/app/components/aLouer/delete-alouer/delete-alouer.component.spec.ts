import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteALouerComponent } from './delete-alouer.component';

describe('DeleteALouerComponent', () => {
  let component: DeleteALouerComponent;
  let fixture: ComponentFixture<DeleteALouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteALouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteALouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
