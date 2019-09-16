import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdVisiteComponent } from './get-by-id-visite.component';

describe('GetByIdVisiteComponent', () => {
  let component: GetByIdVisiteComponent;
  let fixture: ComponentFixture<GetByIdVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
