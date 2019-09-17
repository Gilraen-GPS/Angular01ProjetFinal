import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdContratComponent } from './get-by-id-contrat.component';

describe('GetByIdContratComponent', () => {
  let component: GetByIdContratComponent;
  let fixture: ComponentFixture<GetByIdContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
